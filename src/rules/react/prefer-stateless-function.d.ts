import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferStatelessFunctionRule {
  /**
   * Enforce stateless components to be written as a pure function.
   *
   * @see [prefer-stateless-function](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md)
   */
  'react/prefer-stateless-function': Rule<
    [
      RuleLevel,
      {
        ignorePureComponents?: boolean;
      },
    ]
  >;
}
