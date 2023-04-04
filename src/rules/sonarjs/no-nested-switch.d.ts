import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNestedSwitchRule = {
  /**
   * "switch" statements should not be nested.
   *
   * @see [no-nested-switch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-switch.md)
   */
  'sonarjs/no-nested-switch': Rule<[RuleLevel]>;
};
