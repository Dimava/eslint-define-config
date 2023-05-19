import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRegexpLiteralsRule {
  /**
   * Disallow RegExp literals.
   *
   * @see [no-regexp-literals](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-regexp-literals.html)
   */
  'jsonc/no-regexp-literals': Rule<[RuleLevel]>;
}
