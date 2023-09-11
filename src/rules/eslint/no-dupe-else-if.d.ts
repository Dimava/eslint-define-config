import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDupeElseIfRule {
  /**
   * Disallow duplicate conditions in if-else-if chains.
   *
   * @see [no-dupe-else-if](https://eslint.org/docs/latest/rules/no-dupe-else-if)
   */
  'no-dupe-else-if': Rule<[RuleLevel]>;
}
