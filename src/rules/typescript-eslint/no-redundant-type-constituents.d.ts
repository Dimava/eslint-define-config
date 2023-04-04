import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRedundantTypeConstituentsRule = {
  /**
   * Disallow members of unions and intersections that do nothing or override type information.
   *
   * @see [no-redundant-type-constituents](https://typescript-eslint.io/rules/no-redundant-type-constituents)
   */
  '@typescript-eslint/no-redundant-type-constituents': Rule<[RuleLevel]>;
};
