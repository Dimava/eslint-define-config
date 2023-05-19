import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxSwitchCasesRule {
  /**
   * "switch" statements should not have too many "case" clauses.
   *
   * @see [max-switch-cases](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/max-switch-cases.md)
   */
  'sonarjs/max-switch-cases': Rule<[RuleLevel, number]>;
}
