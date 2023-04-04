import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoShadowRestrictedNamesRule = {
  /**
   * Disallow identifiers from shadowing restricted names.
   *
   * @see [no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)
   */
  'no-shadow-restricted-names': Rule<[RuleLevel]>;
};
