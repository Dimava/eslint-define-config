import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnusedPrivateClassMembersRule = {
  /**
   * Disallow unused private class members.
   *
   * @see [no-unused-private-class-members](https://eslint.org/docs/rules/no-unused-private-class-members)
   */
  'no-unused-private-class-members': Rule<[RuleLevel]>;
};
