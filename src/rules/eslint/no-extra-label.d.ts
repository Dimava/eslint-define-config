import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraLabelRule {
  /**
   * Disallow unnecessary labels.
   *
   * @see [no-extra-label](https://eslint.org/docs/rules/no-extra-label)
   */
  'no-extra-label': Rule<[RuleLevel]>;
}
