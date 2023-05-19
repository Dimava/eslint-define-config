import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BooleanPropNamingRule {
  /**
   * Enforces consistent naming for boolean props.
   *
   * @see [boolean-prop-naming](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md)
   */
  'react/boolean-prop-naming': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        propTypeNames?: [string, ...string[]];
        rule?: string;
        message?: string;
        validateNested?: boolean;
      },
    ]
  >;
}
