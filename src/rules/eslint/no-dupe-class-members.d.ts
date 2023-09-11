import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeClassMembersRule {
  /**
   * Disallow duplicate class members.
   *
   * @see [no-dupe-class-members](https://eslint.org/docs/latest/rules/no-dupe-class-members)
   */
  'no-dupe-class-members': Rule<[RuleLevel]>;
}
