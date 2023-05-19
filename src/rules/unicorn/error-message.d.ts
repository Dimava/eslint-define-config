import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ErrorMessageRule {
  /**
   * Enforce passing a `message` value when creating a built-in error.
   *
   * @see [error-message](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/error-message.md)
   */
  'unicorn/error-message': Rule<[RuleLevel]>;
}
