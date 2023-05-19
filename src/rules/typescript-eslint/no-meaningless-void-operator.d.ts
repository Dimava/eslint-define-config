import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMeaninglessVoidOperatorRule {
  /**
   * Disallow the `void` operator except when used to discard a value.
   *
   * @see [no-meaningless-void-operator](https://typescript-eslint.io/rules/no-meaningless-void-operator)
   */
  '@typescript-eslint/no-meaningless-void-operator': Rule<
    [
      RuleLevel,
      {
        checkNever?: boolean;
      },
    ]
  >;
}
