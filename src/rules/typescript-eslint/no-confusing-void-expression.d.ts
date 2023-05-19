import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConfusingVoidExpressionRule {
  /**
   * Require expressions of type void to appear in statement position.
   *
   * @see [no-confusing-void-expression](https://typescript-eslint.io/rules/no-confusing-void-expression)
   */
  '@typescript-eslint/no-confusing-void-expression': Rule<
    [
      RuleLevel,
      {
        ignoreArrowShorthand?: boolean;
        ignoreVoidOperator?: boolean;
      },
    ]
  >;
}
