import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NonExistentOperatorRule {
  /**
   * Non-existent operators "=+", "=-" and "=!" should not be used.
   *
   * @see [non-existent-operator](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/non-existent-operator.md)
   */
  'sonarjs/non-existent-operator': Rule<[RuleLevel]>;
}
