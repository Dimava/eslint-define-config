import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LinesAroundDirectiveRule {
  /**
   * Require or disallow newlines around directives.
   *
   * @deprecated
   *
   * @see [lines-around-directive](https://eslint.org/docs/rules/lines-around-directive)
   */
  'lines-around-directive': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            before?: 'always' | 'never';
            after?: 'always' | 'never';
          }
      ),
    ]
  >;
}
