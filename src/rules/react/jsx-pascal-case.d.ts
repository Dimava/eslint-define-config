import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxPascalCaseRule {
  /**
   * Enforce PascalCase for user-defined JSX components.
   *
   * @see [jsx-pascal-case](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md)
   */
  'react/jsx-pascal-case': Rule<
    [
      RuleLevel,
      {
        allowAllCaps?: boolean;
        allowLeadingUnderscore?: boolean;
        allowNamespace?: boolean;
        /**
         * @minItems 0
         */
        ignore?: [] | [string];
      },
    ]
  >;
}
