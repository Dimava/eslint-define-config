import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ForbidForeignPropTypesRule {
  /**
   * Disallow using another component's propTypes.
   *
   * @see [forbid-foreign-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md)
   */
  'react/forbid-foreign-prop-types': Rule<
    [
      RuleLevel,
      {
        allowInPropTypes?: boolean;
      },
    ]
  >;
}
