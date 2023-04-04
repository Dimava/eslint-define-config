import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoImplicitAnyCatchRule = {
  /**
   * Disallow usage of the implicit `any` type in catch clauses.
   *
   * @deprecated
   *
   * @see [no-implicit-any-catch](https://typescript-eslint.io/rules/no-implicit-any-catch)
   */
  '@typescript-eslint/no-implicit-any-catch': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to disallow specifying `: any` as the error type as well. See also `no-explicit-any`.
         */
        allowExplicitAny?: boolean;
      },
    ]
  >;
};
