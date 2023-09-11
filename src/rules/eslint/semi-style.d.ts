import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SemiStyleRule {
  /**
   * Enforce location of semicolons.
   *
   * @see [semi-style](https://eslint.org/docs/latest/rules/semi-style)
   */
  'semi-style': Rule<[RuleLevel, 'last' | 'first']>;
}
