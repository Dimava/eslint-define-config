import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface QuotesRule {
  /**
   * Enforce the consistent use of either double, or single quotes.
   *
   * @see [quotes](https://ota-meshi.github.io/eslint-plugin-yml/rules/quotes.html)
   */
  'yml/quotes': Rule<
    [
      RuleLevel,
      {
        prefer?: 'double' | 'single';
        avoidEscape?: boolean;
      },
    ]
  >;
}
