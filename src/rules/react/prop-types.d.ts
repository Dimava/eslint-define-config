import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PropTypesRule {
  /**
   * Disallow missing props validation in a React component definition.
   *
   * @see [prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prop-types.md)
   */
  'react/prop-types': Rule<
    [
      RuleLevel,
      {
        ignore?: string[];
        customValidators?: string[];
        skipUndeclared?: boolean;
      },
    ]
  >;
}
