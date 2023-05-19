import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDuplicateTypeConstituentsRule {
  /**
   * Disallow duplicate constituents of union or intersection types.
   *
   * @see [no-duplicate-type-constituents](https://typescript-eslint.io/rules/no-duplicate-type-constituents)
   */
  '@typescript-eslint/no-duplicate-type-constituents': Rule<
    [
      RuleLevel,
      {
        ignoreIntersections?: boolean;
        ignoreUnions?: boolean;
      },
    ]
  >;
}
