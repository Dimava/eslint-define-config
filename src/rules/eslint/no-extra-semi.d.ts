import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraSemiRule {
  /**
   * Disallow unnecessary semicolons.
   *
   * @see [no-extra-semi](https://eslint.org/docs/latest/rules/no-extra-semi)
   */
  'no-extra-semi': Rule<[RuleLevel]>;
}
