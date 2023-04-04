import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferDomNodeTextContentRule = {
  /**
   * Prefer `.textContent` over `.innerText`.
   *
   * @see [prefer-dom-node-text-content](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-dom-node-text-content.md)
   */
  'unicorn/prefer-dom-node-text-content': Rule<[RuleLevel]>;
};
