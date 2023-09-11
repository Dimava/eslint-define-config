import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxIndentRule {
  /**
   * Enforce JSX indentation.
   *
   * @see [jsx-indent](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md)
   */
  'react/jsx-indent': Rule<
    [
      RuleLevel,
      'tab' | number,
      {
        checkAttributes?: boolean;
        indentLogicalExpressions?: boolean;
      },
    ]
  >;
}
