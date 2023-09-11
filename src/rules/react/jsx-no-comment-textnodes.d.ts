import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoCommentTextnodesRule {
  /**
   * Disallow comments from being inserted as text nodes.
   *
   * @see [jsx-no-comment-textnodes](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md)
   */
  'react/jsx-no-comment-textnodes': Rule<[RuleLevel]>;
}
