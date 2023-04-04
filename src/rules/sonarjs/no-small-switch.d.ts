import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSmallSwitchRule = {
  /**
   * "switch" statements should have at least 3 "case" clauses.
   *
   * @see [no-small-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-small-switch.md)
   */
  'sonarjs/no-small-switch': Rule<[RuleLevel]>;
};
