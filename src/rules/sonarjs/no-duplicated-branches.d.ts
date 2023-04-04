import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicatedBranchesRule = {
  /**
   * Two branches in a conditional structure should not have exactly the same implementation.
   *
   * @see [no-duplicated-branches](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicated-branches.md)
   */
  'sonarjs/no-duplicated-branches': Rule<[RuleLevel, 'sonar-runtime']>;
};
