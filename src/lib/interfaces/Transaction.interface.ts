import { TransactionType } from "../enums/TransactionType.enum";

export interface Transaction {
  id: string;
  title: string;
  comment: string;
  date: string;
  quantity: number;
  type: TransactionType;
}
