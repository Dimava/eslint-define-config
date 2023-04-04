import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoIgnoredReturnRule = {
  /**
   * Return values from functions without side effects should not be ignored.
   *
   * @see [no-ignored-return](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-ignored-return.md)
   */
  'sonarjs/no-ignored-return': Rule<[RuleLevel]>;
};
