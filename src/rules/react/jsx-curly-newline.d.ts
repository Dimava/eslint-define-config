import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxCurlyNewlineRule {
  /**
   * Enforce consistent linebreaks in curly braces in JSX attributes and expressions.
   *
   * @see [jsx-curly-newline](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md)
   */
  'react/jsx-curly-newline': Rule<
    [
      RuleLevel,
      (
        | ('consistent' | 'never')
        | {
            singleline?: 'consistent' | 'require' | 'forbid';
            multiline?: 'consistent' | 'require' | 'forbid';
          }
      ),
    ]
  >;
}
