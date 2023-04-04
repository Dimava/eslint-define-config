import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NonNullableTypeAssertionStyleRule = {
  /**
   * Enforce non-null assertions over explicit type casts.
   *
   * @see [non-nullable-type-assertion-style](https://typescript-eslint.io/rules/non-nullable-type-assertion-style)
   */
  '@typescript-eslint/non-nullable-type-assertion-style': Rule<[RuleLevel]>;
};
