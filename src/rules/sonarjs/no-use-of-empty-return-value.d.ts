import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUseOfEmptyReturnValueRule {
  /**
   * The output of functions that don't return anything should not be used.
   *
   * @see [no-use-of-empty-return-value](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-use-of-empty-return-value.md)
   */
  'sonarjs/no-use-of-empty-return-value': Rule<[RuleLevel]>;
}
