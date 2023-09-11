import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyPatternRule {
  /**
   * Disallow empty destructuring patterns.
   *
   * @see [no-empty-pattern](https://eslint.org/docs/latest/rules/no-empty-pattern)
   */
  'no-empty-pattern': Rule<
    [
      RuleLevel,
      {
        allowObjectPatternsAsParameters?: boolean;
      },
    ]
  >;
}
