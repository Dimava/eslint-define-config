import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessBackreferenceRule {
  /**
   * Disallow useless backreferences in regular expressions.
   *
   * @see [no-useless-backreference](https://eslint.org/docs/latest/rules/no-useless-backreference)
   */
  'no-useless-backreference': Rule<[RuleLevel]>;
}
