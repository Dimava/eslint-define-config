import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTypeErrorRule {
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   *
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': Rule<[RuleLevel]>;
}
