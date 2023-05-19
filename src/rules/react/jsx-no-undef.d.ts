import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoUndefRule {
  /**
   * Disallow undeclared variables in JSX.
   *
   * @see [jsx-no-undef](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md)
   */
  'react/jsx-no-undef': Rule<
    [
      RuleLevel,
      {
        allowGlobals?: boolean;
      },
    ]
  >;
}
