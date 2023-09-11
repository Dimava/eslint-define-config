import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedPropTypesRule {
  /**
   * Disallow definitions of unused propTypes.
   *
   * @see [no-unused-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md)
   */
  'react/no-unused-prop-types': Rule<
    [
      RuleLevel,
      {
        ignore?: string[];
        customValidators?: string[];
        skipShapeProps?: boolean;
      },
    ]
  >;
}
