import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeNegationRule {
  /**
   * Disallow negating the left operand of relational operators.
   *
   * @see [no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)
   */
  'no-unsafe-negation': Rule<
    [
      RuleLevel,
      {
        enforceForOrderingRelations?: boolean;
      },
    ]
  >;
}
