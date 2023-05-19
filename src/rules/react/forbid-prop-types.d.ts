import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ForbidPropTypesRule {
  /**
   * Disallow certain propTypes.
   *
   * @see [forbid-prop-types](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md)
   */
  'react/forbid-prop-types': Rule<
    [
      RuleLevel,
      {
        forbid?: string[];
        checkContextTypes?: boolean;
        checkChildContextTypes?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
