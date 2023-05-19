import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferEnumInitializersRule {
  /**
   * Require each enum member value to be explicitly initialized.
   *
   * @see [prefer-enum-initializers](https://typescript-eslint.io/rules/prefer-enum-initializers)
   */
  '@typescript-eslint/prefer-enum-initializers': Rule<[RuleLevel]>;
}
