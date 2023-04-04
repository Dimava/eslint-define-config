import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnnecessaryTypeConstraintRule = {
  /**
   * Disallow unnecessary constraints on generic types.
   *
   * @see [no-unnecessary-type-constraint](https://typescript-eslint.io/rules/no-unnecessary-type-constraint)
   */
  '@typescript-eslint/no-unnecessary-type-constraint': Rule<[RuleLevel]>;
};
