import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferWhileRule {
  /**
   * A "while" loop should be used instead of a "for" loop.
   *
   * @see [prefer-while](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-while.md)
   */
  'sonarjs/prefer-while': Rule<[RuleLevel]>;
}
