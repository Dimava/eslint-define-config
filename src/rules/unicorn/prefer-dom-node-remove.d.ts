import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferDomNodeRemoveRule = {
  /**
   * Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`.
   *
   * @see [prefer-dom-node-remove](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-dom-node-remove.md)
   */
  'unicorn/prefer-dom-node-remove': Rule<[RuleLevel]>;
};
