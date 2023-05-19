import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNegatedConditionRule {
  /**
   * Disallow negated conditions.
   *
   * @see [no-negated-condition](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-negated-condition.md)
   */
  'unicorn/no-negated-condition': Rule<[RuleLevel]>;
}
