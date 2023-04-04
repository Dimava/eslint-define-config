import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThenableRule = {
  /**
   * Disallow `then` property.
   *
   * @see [no-thenable](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-thenable.md)
   */
  'unicorn/no-thenable': Rule<[RuleLevel]>;
};
