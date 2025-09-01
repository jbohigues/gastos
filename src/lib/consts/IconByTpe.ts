import { TransactionType } from "@lib/enums/TransactionType.enum";

export const iconByType = {
  [TransactionType.INCOME]: { icon: "arrow-up", color: "text-green-500" },
  [TransactionType.EXPENSE]: { icon: "arrow-down", color: "text-red-500" },
};
