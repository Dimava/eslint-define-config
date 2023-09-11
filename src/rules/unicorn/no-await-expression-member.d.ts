import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAwaitExpressionMemberRule {
  /**
   * Disallow member access from await expression.
   *
   * @see [no-await-expression-member](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-await-expression-member.md)
   */
  'unicorn/no-await-expression-member': Rule<[RuleLevel]>;
}
