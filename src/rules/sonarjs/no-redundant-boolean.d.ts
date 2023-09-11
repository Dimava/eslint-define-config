import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRedundantBooleanRule {
  /**
   * Boolean literals should not be redundant.
   *
   * @see [no-redundant-boolean](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-boolean.md)
   */
  'sonarjs/no-redundant-boolean': Rule<[RuleLevel]>;
}
