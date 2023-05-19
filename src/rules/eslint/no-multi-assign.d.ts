import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiAssignRule {
  /**
   * Disallow use of chained assignment expressions.
   *
   * @see [no-multi-assign](https://eslint.org/docs/rules/no-multi-assign)
   */
  'no-multi-assign': Rule<
    [
      RuleLevel,
      {
        ignoreNonDeclaration?: boolean;
      },
    ]
  >;
}
