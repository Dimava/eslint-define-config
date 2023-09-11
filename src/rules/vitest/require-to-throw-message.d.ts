import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireToThrowMessageRule {
  /**
   * Require toThrow() to be called with an error message.
   *
   * @see [require-to-throw-message](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/require-to-throw-message.md)
   */
  'vitest/require-to-throw-message': Rule<[RuleLevel]>;
}
