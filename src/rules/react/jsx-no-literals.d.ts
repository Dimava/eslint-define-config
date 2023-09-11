import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNoLiteralsRule {
  /**
   * Disallow usage of string literals in JSX.
   *
   * @see [jsx-no-literals](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md)
   */
  'react/jsx-no-literals': Rule<
    [
      RuleLevel,
      {
        noStrings?: boolean;
        allowedStrings?: string[];
        ignoreProps?: boolean;
        noAttributeStrings?: boolean;
      },
    ]
  >;
}
