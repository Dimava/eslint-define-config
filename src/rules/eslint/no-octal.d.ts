import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoOctalRule {
  /**
   * Disallow octal literals.
   *
   * @see [no-octal](https://eslint.org/docs/rules/no-octal)
   */
  'no-octal': Rule<[RuleLevel]>;
}
