import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtraSemiRule = {
  /**
   * Disallow unnecessary semicolons.
   *
   * @see [no-extra-semi](https://typescript-eslint.io/rules/no-extra-semi)
   */
  '@typescript-eslint/no-extra-semi': Rule<[RuleLevel]>;
};
