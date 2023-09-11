import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface VoidDomElementsNoChildrenRule {
  /**
   * Disallow void DOM elements (e.g. `<img />`, `<br />`) from receiving children.
   *
   * @see [void-dom-elements-no-children](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md)
   */
  'react/void-dom-elements-no-children': Rule<[RuleLevel]>;
}
