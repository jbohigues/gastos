import { TransactionType } from "@lib/enums/TransactionType.enum";
import type { Transaction } from "@lib/interfaces/Transaction.interface";

export const transactions: Transaction[] = [
  {
    id: "1",
    title: "Salario",
    comment: "Salario mensual",
    date: new Date("2025-08-09"),
    quantity: 3000,
    type: TransactionType.INCOME,
  },
  {
    id: "2",
    title: "Alquiler",
    comment: "Alquiler piso",
    date: new Date("2025-08-08"),
    quantity: 800,
    type: TransactionType.EXPENSE,
  },
  {
    id: "3",
    title: "Supermercado",
    comment: "Compras semanales",
    date: new Date("2025-08-07"),
    quantity: 150,
    type: TransactionType.EXPENSE,
  },
];
