import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnreadableArrayDestructuringRule = {
  /**
   * Disallow unreadable array destructuring.
   *
   * @see [no-unreadable-array-destructuring](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-unreadable-array-destructuring.md)
   */
  'unicorn/no-unreadable-array-destructuring': Rule<[RuleLevel]>;
};
