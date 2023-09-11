import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface QuotesRule {
  /**
   * Enforce use of double or single quotes.
   *
   * @see [quotes](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/quotes.html)
   */
  'jsonc/quotes': Rule<
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
}
