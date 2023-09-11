import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnnecessaryQualifierRule {
  /**
   * Disallow unnecessary namespace qualifiers.
   *
   * @see [no-unnecessary-qualifier](https://typescript-eslint.io/rules/no-unnecessary-qualifier)
   */
  '@typescript-eslint/no-unnecessary-qualifier': Rule<[RuleLevel]>;
}
