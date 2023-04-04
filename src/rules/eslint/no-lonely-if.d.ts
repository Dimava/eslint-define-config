import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoLonelyIfRule = {
  /**
   * Disallow `if` statements as the only statement in `else` blocks.
   *
   * @see [no-lonely-if](https://eslint.org/docs/rules/no-lonely-if)
   */
  'no-lonely-if': Rule<[RuleLevel]>;
};
