import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireDefaultPropsRule {
  /**
   * Enforce a defaultProps definition for every prop that is not a required prop.
   *
   * @see [require-default-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/require-default-props.md)
   */
  'react/require-default-props': Rule<
    [
      RuleLevel,
      {
        forbidDefaultForRequired?: boolean;
        classes?: 'defaultProps' | 'ignore';
        functions?: 'defaultArguments' | 'defaultProps' | 'ignore';
        ignoreFunctionalComponents?: boolean;
      },
    ]
  >;
}
