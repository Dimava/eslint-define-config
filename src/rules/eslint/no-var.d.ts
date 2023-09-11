import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVarRule {
  /**
   * Require `let` or `const` instead of `var`.
   *
   * @see [no-var](https://eslint.org/docs/latest/rules/no-var)
   */
  'no-var': Rule<[RuleLevel]>;
}
