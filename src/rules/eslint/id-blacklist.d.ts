import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type IdBlacklistRule = {
  /**
   * Disallow specified identifiers.
   *
   * @deprecated
   *
   * @see [id-blacklist](https://eslint.org/docs/rules/id-blacklist)
   */
  'id-blacklist': Rule<[RuleLevel, string[]]>;
};
