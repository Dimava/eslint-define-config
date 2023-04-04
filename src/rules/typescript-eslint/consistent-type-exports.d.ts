import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ConsistentTypeExportsRule = {
  /**
   * Enforce consistent usage of type exports.
   *
   * @see [consistent-type-exports](https://typescript-eslint.io/rules/consistent-type-exports)
   */
  '@typescript-eslint/consistent-type-exports': Rule<
    [
      RuleLevel,
      {
        fixMixedExportsWithInlineTypeSpecifier?: boolean;
      },
    ]
  >;
};
