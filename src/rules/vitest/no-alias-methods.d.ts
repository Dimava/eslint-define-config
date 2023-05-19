import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAliasMethodsRule {
  /**
   * Disallow alias methods.
   *
   * @see [no-alias-methods](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-alias-methods.md)
   */
  'vitest/no-alias-methods': Rule<[RuleLevel]>;
}
