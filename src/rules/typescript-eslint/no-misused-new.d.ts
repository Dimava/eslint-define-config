import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMisusedNewRule {
  /**
   * Enforce valid definition of `new` and `constructor`.
   *
   * @see [no-misused-new](https://typescript-eslint.io/rules/no-misused-new)
   */
  '@typescript-eslint/no-misused-new': Rule<[RuleLevel]>;
}
