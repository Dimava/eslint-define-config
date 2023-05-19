import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLonelyIfRule {
  /**
   * Disallow `if` statements as the only statement in `if` blocks without `else`.
   *
   * @see [no-lonely-if](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-lonely-if.md)
   */
  'unicorn/no-lonely-if': Rule<[RuleLevel]>;
}
