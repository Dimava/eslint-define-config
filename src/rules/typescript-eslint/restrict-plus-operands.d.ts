import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RestrictPlusOperandsRule = {
  /**
   * Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
   *
   * @see [restrict-plus-operands](https://typescript-eslint.io/rules/restrict-plus-operands)
   */
  '@typescript-eslint/restrict-plus-operands': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to check compound assignments such as `+=`.
         */
        checkCompoundAssignments?: boolean;
        /**
         * Whether to allow `any` typed values.
         */
        allowAny?: boolean;
      },
    ]
  >;
};
