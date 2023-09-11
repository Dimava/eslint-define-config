import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessCatchRule {
  /**
   * "catch" clauses should do more than rethrow.
   *
   * @see [no-useless-catch](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-useless-catch.md)
   */
  'sonarjs/no-useless-catch': Rule<[RuleLevel]>;
}
