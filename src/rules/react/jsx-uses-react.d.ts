import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxUsesReactRule {
  /**
   * Disallow React to be incorrectly marked as unused.
   *
   * @see [jsx-uses-react](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md)
   */
  'react/jsx-uses-react': Rule<[RuleLevel]>;
}
