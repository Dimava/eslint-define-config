import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxChildElementSpacingRule {
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * @see [jsx-child-element-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md)
   */
  'react/jsx-child-element-spacing': Rule<[RuleLevel]>;
}
