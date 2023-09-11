import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RestrictPlusOperandsRule {
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
         * Whether to allow `any` typed values.
         */
        allowAny?: boolean;
        /**
         * Whether to allow `boolean` typed values.
         */
        allowBoolean?: boolean;
        /**
         * Whether to allow potentially `null` or `undefined` typed values.
         */
        allowNullish?: boolean;
        /**
         * Whether to allow `bigint`/`number` typed values and `string` typed values to be added together.
         */
        allowNumberAndString?: boolean;
        /**
         * Whether to allow `regexp` typed values.
         */
        allowRegExp?: boolean;
        /**
         * Whether to check compound assignments such as `+=`.
         */
        checkCompoundAssignments?: boolean;
      },
    ]
  >;
}
