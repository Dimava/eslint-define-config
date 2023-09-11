import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferQuerySelectorRule {
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.
   *
   * @see [prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-query-selector.md)
   */
  'unicorn/prefer-query-selector': Rule<[RuleLevel]>;
}
