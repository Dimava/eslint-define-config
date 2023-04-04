import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCollectionSizeMischeckRule = {
  /**
   * Collection sizes and array length comparisons should make sense.
   *
   * @see [no-collection-size-mischeck](https://github.com/SonarSource/eslint-plugin-sonarjs/blob/master/docs/rules/no-collection-size-mischeck.md)
   */
  'sonarjs/no-collection-size-mischeck': Rule<[RuleLevel]>;
};
