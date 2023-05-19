import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoFindDomNodeRule {
  /**
   * Disallow usage of findDOMNode.
   *
   * @see [no-find-dom-node](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md)
   */
  'react/no-find-dom-node': Rule<[RuleLevel]>;
}
