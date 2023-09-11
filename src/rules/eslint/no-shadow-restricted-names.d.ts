import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoShadowRestrictedNamesRule {
  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * @see [no-shadow-restricted-names](https://eslint.org/docs/latest/rules/no-shadow-restricted-names)
   */
  'no-shadow-restricted-names': Rule<[RuleLevel]>;
}
