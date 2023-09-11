import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIdenticalExpressionsRule {
  /**
   * Identical expressions should not be used on both sides of a binary operator.
   *
   * @see [no-identical-expressions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-expressions.md)
   */
  'sonarjs/no-identical-expressions': Rule<[RuleLevel, 'sonar-runtime']>;
}
