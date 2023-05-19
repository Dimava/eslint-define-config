import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxIndentPropsRule {
  /**
   * Enforce props indentation in JSX.
   *
   * @see [jsx-indent-props](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md)
   */
  'react/jsx-indent-props': Rule<
    [
      RuleLevel,
      (
        | ('tab' | 'first')
        | number
        | {
            indentMode?: ('tab' | 'first') | number;
            ignoreTernaryOperator?: boolean;
            [k: string]: any;
          }
      ),
    ]
  >;
}
