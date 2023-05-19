import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDomNodeAppendRule {
  /**
   * Prefer `Node#append()` over `Node#appendChild()`.
   *
   * @see [prefer-dom-node-append](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-dom-node-append.md)
   */
  'unicorn/prefer-dom-node-append': Rule<[RuleLevel]>;
}
