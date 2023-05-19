import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDomNodeDatasetRule {
  /**
   * Prefer using `.dataset` on DOM elements over calling attribute methods.
   *
   * @see [prefer-dom-node-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-dom-node-dataset.md)
   */
  'unicorn/prefer-dom-node-dataset': Rule<[RuleLevel]>;
}
