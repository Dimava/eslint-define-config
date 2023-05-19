import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ElseifWithoutElseRule {
  /**
   * "if ... else if" constructs should end with "else" clauses.
   *
   * @see [elseif-without-else](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/elseif-without-else.md)
   */
  'sonarjs/elseif-without-else': Rule<[RuleLevel]>;
}
