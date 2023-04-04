import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoFloatingDecimalRule = {
  /**
   * Disallow leading or trailing decimal points in numeric literals.
   *
   * @see [no-floating-decimal](https://eslint.org/docs/rules/no-floating-decimal)
   */
  'no-floating-decimal': Rule<[RuleLevel]>;
};
