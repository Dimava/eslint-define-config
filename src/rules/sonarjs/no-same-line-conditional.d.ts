import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSameLineConditionalRule = {
  /**
   * Conditionals should start on new lines.
   *
   * @see [no-same-line-conditional](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-same-line-conditional.md)
   */
  'sonarjs/no-same-line-conditional': Rule<[RuleLevel, 'sonar-runtime']>;
};
