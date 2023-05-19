import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRedundantJumpRule {
  /**
   * Jump statements should not be redundant.
   *
   * @see [no-redundant-jump](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-redundant-jump.md)
   */
  'sonarjs/no-redundant-jump': Rule<[RuleLevel]>;
}
