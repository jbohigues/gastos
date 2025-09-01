// Con `output: 'hybrid'` configurado:
// export const prerender = false;
import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";

// En tu register.ts
export const POST: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response(
      JSON.stringify({
        message: "Correo electrónico y contraseña obligatorios",
      }),
      { status: 400 },
    );
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  console.log({ data, error });

  if (
    data.user ||
    error?.message.includes("already registered") ||
    error?.message.includes("user already exists")
  ) {
    return new Response(
      JSON.stringify({
        message:
          "Ya existe una cuenta con este correo electrónico. Por favor, intenta iniciar sesión o restablecer la contraseña",
      }),
      { status: 409 },
    );
  }

  if (error) {
    return new Response(
      JSON.stringify({
        message: "Error al registrar el usuario",
      }),
      { status: 500 },
    );
  }

  // Registro exitoso: devuelve un JSON con éxito (NO redirect)
  return new Response(
    JSON.stringify({
      success: true,
      message: "Registro exitoso",
    }),
    { status: 200, headers: { "Content-Type": "application/json" } },
  );
};
