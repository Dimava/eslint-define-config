import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferQuerySelectorRule = {
  /**
   * Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`.
   *
   * @see [prefer-query-selector](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-query-selector.md)
   */
  'unicorn/prefer-query-selector': Rule<[RuleLevel]>;
};
