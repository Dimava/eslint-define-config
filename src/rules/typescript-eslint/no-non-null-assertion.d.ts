import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNonNullAssertionRule = {
  /**
   * Disallow non-null assertions using the `!` postfix operator.
   *
   * @see [no-non-null-assertion](https://typescript-eslint.io/rules/no-non-null-assertion)
   */
  '@typescript-eslint/no-non-null-assertion': Rule<[RuleLevel]>;
};
