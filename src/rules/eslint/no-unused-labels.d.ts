import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedLabelsRule {
  /**
   * Disallow unused labels.
   *
   * @see [no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)
   */
  'no-unused-labels': Rule<[RuleLevel]>;
}
