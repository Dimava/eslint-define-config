import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoElementOverwriteRule {
  /**
   * Collection elements should not be replaced unconditionally.
   *
   * @see [no-element-overwrite](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-element-overwrite.md)
   */
  'sonarjs/no-element-overwrite': Rule<[RuleLevel, 'sonar-runtime']>;
}
