import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIteratorRule {
  /**
   * Disallow the use of the `__iterator__` property.
   *
   * @see [no-iterator](https://eslint.org/docs/latest/rules/no-iterator)
   */
  'no-iterator': Rule<[RuleLevel]>;
}
