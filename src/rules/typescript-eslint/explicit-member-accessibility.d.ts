import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ExplicitMemberAccessibilityRule = {
  /**
   * Require explicit accessibility modifiers on class properties and methods.
   *
   * @see [explicit-member-accessibility](https://typescript-eslint.io/rules/explicit-member-accessibility)
   */
  '@typescript-eslint/explicit-member-accessibility': Rule<[RuleLevel, any[]]>;
};
