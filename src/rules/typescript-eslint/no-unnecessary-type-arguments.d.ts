import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnnecessaryTypeArgumentsRule = {
  /**
   * Disallow type arguments that are equal to the default.
   *
   * @see [no-unnecessary-type-arguments](https://typescript-eslint.io/rules/no-unnecessary-type-arguments)
   */
  '@typescript-eslint/no-unnecessary-type-arguments': Rule<[RuleLevel]>;
};
