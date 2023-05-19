import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNestingRule {
  /**
   *
   * @see [no-nesting](https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/no-nesting.md)
   */
  'promise/no-nesting': Rule<[RuleLevel]>;
}
