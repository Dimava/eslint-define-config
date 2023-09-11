import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnreadableIifeRule {
  /**
   * Disallow unreadable IIFEs.
   *
   * @see [no-unreadable-iife](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-unreadable-iife.md)
   */
  'unicorn/no-unreadable-iife': Rule<[RuleLevel]>;
}
