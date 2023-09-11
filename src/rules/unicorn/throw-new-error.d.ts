import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ThrowNewErrorRule {
  /**
   * Require `new` when throwing an error.
   *
   * @see [throw-new-error](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/throw-new-error.md)
   */
  'unicorn/throw-new-error': Rule<[RuleLevel]>;
}
