import type { LoanState } from "@lib/enums/LoanState.enum";

export interface Loan {
  id: string;
  contact: string;
  description: string;
  date: string;
  amount: number;
  status: LoanState;
}
