import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnnecessaryBooleanLiteralCompareRule {
  /**
   * Disallow unnecessary equality comparisons against boolean literals.
   *
   * @see [no-unnecessary-boolean-literal-compare](https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare)
   */
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to allow comparisons between nullable boolean variables and `true`.
         */
        allowComparingNullableBooleansToTrue?: boolean;
        /**
         * Whether to allow comparisons between nullable boolean variables and `false`.
         */
        allowComparingNullableBooleansToFalse?: boolean;
      },
    ]
  >;
}
