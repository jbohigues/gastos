import { TransactionType } from "@lib/enums/TransactionType.enum";
import type { Transaction } from "@lib/interfaces/Transaction.interface";

export const transactions: Transaction[] = [
  {
    title: "Salario",
    comment: "Salario mensual",
    date: "2025-08-09",
    quantity: 3000,
    type: TransactionType.INCOME,
  },
  {
    title: "Alquiler",
    comment: "Alquiler piso",
    date: "2025-08-08",
    quantity: 800,
    type: TransactionType.EXPENSE,
  },
  {
    title: "Supermercado",
    comment: "Compras semanales",
    date: "2025-08-07",
    quantity: 150,
    type: TransactionType.EXPENSE,
  },
];
