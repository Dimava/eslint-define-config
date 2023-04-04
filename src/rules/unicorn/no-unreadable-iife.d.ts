import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnreadableIifeRule = {
  /**
   * Disallow unreadable IIFEs.
   *
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': Rule<[RuleLevel]>;
};
