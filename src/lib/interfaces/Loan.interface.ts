import type { LoanState } from "@lib/enums/LoanState.enum";

export interface Loan {
  id: string;
  contact: string;
  description: string;
  date: Date;
  amount: number;
  payments: Payments[];
  status: LoanState;
}

export interface Payments {
  id: string;
  date: Date;
  amount: number;
  description: string;
}
