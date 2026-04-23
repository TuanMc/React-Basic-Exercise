import { formatCurrency } from '../helpers/currency';

export function getPaymentSummary(amount) {
  return `Total payment: ${formatCurrency(amount)}`;
}
