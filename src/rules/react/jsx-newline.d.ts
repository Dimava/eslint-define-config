import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxNewlineRule {
  /**
   * Require or prevent a new line after jsx elements and expressions.
   *
   * @see [jsx-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md)
   */
  'react/jsx-newline': Rule<
    [
      RuleLevel,
      {
        prevent?: boolean;
        allowMultilines?: boolean;
      },
    ]
  >;
}
