import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferObjectLiteralRule = {
  /**
   * Object literal syntax should be used.
   *
   * @see [prefer-object-literal](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/prefer-object-literal.md)
   */
  'sonarjs/prefer-object-literal': Rule<[RuleLevel]>;
};
