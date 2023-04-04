import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoAllDuplicatedBranchesRule = {
  /**
   * All branches in a conditional structure should not have exactly the same implementation.
   *
   * @see [no-all-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-all-duplicated-branches.md)
   */
  'sonarjs/no-all-duplicated-branches': Rule<[RuleLevel]>;
};
