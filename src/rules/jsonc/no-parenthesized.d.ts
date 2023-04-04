import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoParenthesizedRule = {
  /**
   * Disallow parentheses around the expression.
   *
   * @see [no-parenthesized](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-parenthesized.html)
   */
  'jsonc/no-parenthesized': Rule<[RuleLevel]>;
};
