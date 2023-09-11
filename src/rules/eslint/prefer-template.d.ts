import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTemplateRule {
  /**
   * Require template literals instead of string concatenation.
   *
   * @see [prefer-template](https://eslint.org/docs/latest/rules/prefer-template)
   */
  'prefer-template': Rule<[RuleLevel]>;
}
