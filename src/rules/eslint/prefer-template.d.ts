import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferTemplateRule = {
  /**
   * Require template literals instead of string concatenation.
   *
   * @see [prefer-template](https://eslint.org/docs/rules/prefer-template)
   */
  'prefer-template': Rule<[RuleLevel]>;
};
