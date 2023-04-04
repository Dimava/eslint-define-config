import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type QuotesRule = {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://eslint.org/docs/rules/quotes)
   */
  quotes: Rule<
    [
      RuleLevel,
      'single' | 'double' | 'backtick',
      (
        | 'avoid-escape'
        | {
            avoidEscape?: boolean;
            allowTemplateLiterals?: boolean;
          }
      ),
    ]
  >;
};
