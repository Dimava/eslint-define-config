import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtraSemiRule = {
  /**
   * Disallow unnecessary semicolons.
   *
   * @see [no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)
   */
  'no-extra-semi': Rule<[RuleLevel]>;
};
