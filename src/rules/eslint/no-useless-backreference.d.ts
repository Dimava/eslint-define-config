import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessBackreferenceRule = {
  /**
   * Disallow useless backreferences in regular expressions.
   *
   * @see [no-useless-backreference](https://eslint.org/docs/rules/no-useless-backreference)
   */
  'no-useless-backreference': Rule<[RuleLevel]>;
};
