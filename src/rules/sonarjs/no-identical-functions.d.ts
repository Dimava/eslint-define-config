import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIdenticalFunctionsRule {
  /**
   * Functions should not have identical implementations.
   *
   * @see [no-identical-functions](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-identical-functions.md)
   */
  'sonarjs/no-identical-functions': Rule<[RuleLevel, number, 'sonar-runtime']>;
}
