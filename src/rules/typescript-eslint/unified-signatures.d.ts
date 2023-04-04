import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UnifiedSignaturesRule = {
  /**
   * Disallow two overloads that could be unified into one with a union or an optional/rest parameter.
   *
   * @see [unified-signatures](https://typescript-eslint.io/rules/unified-signatures)
   */
  '@typescript-eslint/unified-signatures': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether two parameters with different names at the same index should be considered different even if their types are the same.
         */
        ignoreDifferentlyNamedParameters?: boolean;
      },
    ]
  >;
};
