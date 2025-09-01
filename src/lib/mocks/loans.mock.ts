import { LoanState } from "@lib/enums/LoanState.enum";
import type { Loan } from "@lib/interfaces/Loan.interface";

export const loans: Loan[] = [
  {
    id: "1",
    contact: "Paco García",
    description: "Cena de cumpleaños",
    amount: 750,
    date: "2024-06-01",
    status: LoanState.GIVEN,
  },
  {
    id: "2",
    contact: "Juan Pérez",
    description: "Reparación coche",
    amount: 3200,
    date: "2024-12-31",
    status: LoanState.GIVEN,
  },
  {
    id: "3",
    contact: "Ana López",
    description: "Gasolina viaje",
    amount: 400,
    date: "2024-04-01",
    status: LoanState.GIVEN,
  },
  {
    id: "4",
    contact: "Luisa Rodríguez",
    description: "Compra portatil",
    amount: 200,
    date: "2024-04-01",
    status: LoanState.RECEIVED,
  },
  {
    id: "5",
    contact: "José Fernández",
    description: "Entrada villa",
    amount: 1200,
    date: "2024-07-01",
    status: LoanState.RECEIVED,
  },
  {
    id: "6",
    contact: "María García",
    description: "Salida fiesta",
    amount: 80,
    date: "2024-08-01",
    status: LoanState.RESOLVED,
  },
];
