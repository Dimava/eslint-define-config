import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoGratuitousExpressionsRule {
  /**
   * Boolean expressions should not be gratuitous.
   *
   * @see [no-gratuitous-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-gratuitous-expressions.md)
   */
  'sonarjs/no-gratuitous-expressions': Rule<[RuleLevel, 'sonar-runtime']>;
}
