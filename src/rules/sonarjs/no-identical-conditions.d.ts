import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIdenticalConditionsRule {
  /**
   * Related "if-else-if" and "switch-case" statements should not have the same condition.
   *
   * @see [no-identical-conditions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-conditions.md)
   */
  'sonarjs/no-identical-conditions': Rule<[RuleLevel, 'sonar-runtime']>;
}
