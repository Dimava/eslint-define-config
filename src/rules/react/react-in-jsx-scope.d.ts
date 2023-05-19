import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ReactInJsxScopeRule {
  /**
   * Disallow missing React when using JSX.
   *
   * @see [react-in-jsx-scope](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md)
   */
  'react/react-in-jsx-scope': Rule<[RuleLevel]>;
}
