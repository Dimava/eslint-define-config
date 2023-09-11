import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConfusingArrowRule {
  /**
   * Disallow arrow functions where they could be confused with comparisons.
   *
   * @see [no-confusing-arrow](https://eslint.org/docs/latest/rules/no-confusing-arrow)
   */
  'no-confusing-arrow': Rule<
    [
      RuleLevel,
      {
        allowParens?: boolean;
        onlyOneSimpleParam?: boolean;
      },
    ]
  >;
}
