import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefaultPropsMatchPropTypesRule {
  /**
   * Enforce all defaultProps have a corresponding non-required PropType.
   *
   * @see [default-props-match-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md)
   */
  'react/default-props-match-prop-types': Rule<
    [
      RuleLevel,
      {
        allowRequiredDefaults?: boolean;
      },
    ]
  >;
}
