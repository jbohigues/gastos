import { LoanState } from "@lib/enums/LoanState.enum";
import type { Loan } from "@lib/interfaces/Loan.interface";

export const loans: Loan[] = [
  {
    id: "1",
    contact: "Paco García",
    description: "Cena de cumpleaños",
    amount: 750,
    date: new Date("2024-06-01"),
    payments: [
      {
        id: "1",
        date: new Date("2024-08-01"),
        amount: 15,
        description: "Pago 1",
      },
      {
        id: "2",
        date: new Date("2024-08-01"),
        amount: 105,
        description: "Pago 2",
      },
    ],
    status: LoanState.GIVEN,
  },
  {
    id: "2",
    contact: "Juan Pérez",
    description: "Reparación coche",
    amount: 3200,
    date: new Date("2024-12-31"),
    payments: [
      {
        id: "1",
        date: new Date("2024-08-01"),
        amount: 1500,
        description: "Pago 1",
      },
      {
        id: "2",
        date: new Date("2024-08-01"),
        amount: 1500,
        description: "Pago 2",
      },
    ],
    status: LoanState.RECEIVED,
  },
  {
    id: "3",
    contact: "Ana López",
    description: "Gasolina viaje",
    amount: 400,
    date: new Date("2024-04-01"),
    payments: [],
    status: LoanState.GIVEN,
  },
  {
    id: "4",
    contact: "Luisa Rodríguez",
    description: "Compra portatil",
    amount: 20500,
    date: new Date("2024-04-01"),
    payments: [],
    status: LoanState.RECEIVED,
  },
  {
    id: "5",
    contact: "José Fernández",
    description: "Entrada villa",
    amount: 1200,
    date: new Date("2024-07-01"),
    payments: [],
    status: LoanState.RECEIVED,
  },
  {
    id: "6",
    contact: "María García",
    description: "Salida fiesta",
    amount: 80,
    date: new Date("2024-08-01"),
    payments: [],
    status: LoanState.RESOLVED,
  },
];
