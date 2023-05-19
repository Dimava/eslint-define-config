import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLabelVarRule {
  /**
   * Disallow labels that share a name with a variable.
   *
   * @see [no-label-var](https://eslint.org/docs/rules/no-label-var)
   */
  'no-label-var': Rule<[RuleLevel]>;
}
