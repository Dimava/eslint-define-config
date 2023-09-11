import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxUsesVarsRule {
  /**
   * Disallow variables used in JSX to be incorrectly marked as unused.
   *
   * @see [jsx-uses-vars](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md)
   */
  'react/jsx-uses-vars': Rule<[RuleLevel]>;
}
