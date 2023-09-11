import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockScopedVarRule {
  /**
   * Enforce the use of variables within the scope they are defined.
   *
   * @see [block-scoped-var](https://eslint.org/docs/latest/rules/block-scoped-var)
   */
  'block-scoped-var': Rule<[RuleLevel]>;
}
