import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferTypeErrorRule = {
  /**
   * Enforce throwing `TypeError` in type checking conditions.
   *
   * @see [prefer-type-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-type-error.md)
   */
  'unicorn/prefer-type-error': Rule<[RuleLevel]>;
};
