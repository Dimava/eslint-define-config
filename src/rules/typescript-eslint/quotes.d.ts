import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type QuotesRule = {
  /**
   * Enforce the consistent use of either backticks, double, or single quotes.
   *
   * @see [quotes](https://typescript-eslint.io/rules/quotes)
   */
  '@typescript-eslint/quotes': Rule<
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
