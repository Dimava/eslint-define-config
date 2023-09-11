import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExplicitAnyRule {
  /**
   * Disallow the `any` type.
   *
   * @see [no-explicit-any](https://typescript-eslint.io/rules/no-explicit-any)
   */
  '@typescript-eslint/no-explicit-any': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to enable auto-fixing in which the `any` type is converted to the `unknown` type.
         */
        fixToUnknown?: boolean;
        /**
         * Whether to ignore rest parameter arrays.
         */
        ignoreRestArgs?: boolean;
      },
    ]
  >;
}
