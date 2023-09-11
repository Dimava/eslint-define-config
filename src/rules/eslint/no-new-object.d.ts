import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNewObjectRule {
  /**
   * Disallow `Object` constructors.
   *
   * @see [no-new-object](https://eslint.org/docs/latest/rules/no-new-object)
   */
  'no-new-object': Rule<[RuleLevel]>;
}
