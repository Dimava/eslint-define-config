import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtraArgumentsRule = {
  /**
   * Function calls should not pass extra arguments.
   *
   * @see [no-extra-arguments](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-extra-arguments.md)
   */
  'sonarjs/no-extra-arguments': Rule<[RuleLevel, 'sonar-runtime']>;
};
