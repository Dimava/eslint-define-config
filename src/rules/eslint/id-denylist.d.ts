import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IdDenylistRule {
  /**
   * Disallow specified identifiers.
   *
   * @see [id-denylist](https://eslint.org/docs/rules/id-denylist)
   */
  'id-denylist': Rule<[RuleLevel, ...string[]]>;
}
