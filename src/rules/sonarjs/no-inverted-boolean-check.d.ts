import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInvertedBooleanCheckRule {
  /**
   * Boolean checks should not be inverted.
   *
   * @see [no-inverted-boolean-check](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-inverted-boolean-check.md)
   */
  'sonarjs/no-inverted-boolean-check': Rule<[RuleLevel]>;
}
