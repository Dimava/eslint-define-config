import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedCollectionRule {
  /**
   * Collection and array contents should be used.
   *
   * @see [no-unused-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-unused-collection.md)
   */
  'sonarjs/no-unused-collection': Rule<[RuleLevel]>;
}
