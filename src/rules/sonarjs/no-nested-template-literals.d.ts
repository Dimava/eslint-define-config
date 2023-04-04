import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoNestedTemplateLiteralsRule = {
  /**
   * Template literals should not be nested.
   *
   * @see [no-nested-template-literals](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-nested-template-literals.md)
   */
  'sonarjs/no-nested-template-literals': Rule<[RuleLevel]>;
};
