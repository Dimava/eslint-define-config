import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FunctionParenNewlineRule {
  /**
   * Enforce consistent line breaks inside function parentheses.
   *
   * @see [function-paren-newline](https://eslint.org/docs/latest/rules/function-paren-newline)
   */
  'function-paren-newline': Rule<
    [
      RuleLevel,
      (
        | (
            | 'always'
            | 'never'
            | 'consistent'
            | 'multiline'
            | 'multiline-arguments'
          )
        | {
            minItems?: number;
          }
      ),
    ]
  >;
}
