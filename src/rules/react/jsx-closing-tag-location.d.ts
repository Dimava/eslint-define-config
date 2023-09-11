import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxClosingTagLocationRule {
  /**
   * Enforce closing tag location for multiline JSX.
   *
   * @see [jsx-closing-tag-location](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md)
   */
  'react/jsx-closing-tag-location': Rule<[RuleLevel]>;
}
