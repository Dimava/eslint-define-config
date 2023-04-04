import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateStringRule = {
  /**
   * String literals should not be duplicated.
   *
   * @see [no-duplicate-string](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-duplicate-string.md)
   */
  'sonarjs/no-duplicate-string': Rule<[RuleLevel, number, 'sonar-runtime']>;
};
