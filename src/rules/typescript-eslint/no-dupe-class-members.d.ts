import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeClassMembersRule {
  /**
   * Disallow duplicate class members.
   *
   * @see [no-dupe-class-members](https://typescript-eslint.io/rules/no-dupe-class-members)
   */
  '@typescript-eslint/no-dupe-class-members': Rule<[RuleLevel]>;
}
