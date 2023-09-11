import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWhitespaceBeforePropertyRule {
  /**
   * Disallow whitespace before properties.
   *
   * @see [no-whitespace-before-property](https://eslint.org/docs/latest/rules/no-whitespace-before-property)
   */
  'no-whitespace-before-property': Rule<[RuleLevel]>;
}
