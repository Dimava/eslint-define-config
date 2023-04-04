import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RestrictTemplateExpressionsRule = {
  /**
   * Enforce template literal expressions to be of `string` type.
   *
   * @see [restrict-template-expressions](https://typescript-eslint.io/rules/restrict-template-expressions)
   */
  '@typescript-eslint/restrict-template-expressions': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to allow `number` typed values in template expressions.
         */
        allowNumber?: boolean;
        /**
         * Whether to allow `boolean` typed values in template expressions.
         */
        allowBoolean?: boolean;
        /**
         * Whether to allow `any` typed values in template expressions.
         */
        allowAny?: boolean;
        /**
         * Whether to allow `nullish` typed values in template expressions.
         */
        allowNullish?: boolean;
        /**
         * Whether to allow `regexp` typed values in template expressions.
         */
        allowRegExp?: boolean;
        /**
         * Whether to allow `never` typed values in template expressions.
         */
        allowNever?: boolean;
        [k: string]: any;
      },
    ]
  >;
};
