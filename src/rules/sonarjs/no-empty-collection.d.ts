import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyCollectionRule {
  /**
   * Empty collections should not be accessed or iterated.
   *
   * @see [no-empty-collection](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-empty-collection.md)
   */
  'sonarjs/no-empty-collection': Rule<[RuleLevel]>;
}
