import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type EscapeCaseRule = {
  /**
   * Require escape sequences to use uppercase values.
   *
   * @see [escape-case](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/escape-case.md)
   */
  'unicorn/escape-case': Rule<[RuleLevel]>;
};
