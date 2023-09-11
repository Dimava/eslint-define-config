import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface EscapeCaseRule {
  /**
   * Require escape sequences to use uppercase values.
   *
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': Rule<[RuleLevel]>;
}
