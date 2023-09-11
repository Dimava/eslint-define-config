import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IdBlacklistRule {
  /**
   * Disallow specified identifiers.
   *
   * @deprecated
   *
   * @see [id-blacklist](https://eslint.org/docs/latest/rules/id-blacklist)
   */
  'id-blacklist': Rule<[RuleLevel, ...string[]]>;
}
