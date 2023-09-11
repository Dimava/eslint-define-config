import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefInitRule {
  /**
   * Disallow initializing variables to `undefined`.
   *
   * @see [no-undef-init](https://eslint.org/docs/latest/rules/no-undef-init)
   */
  'no-undef-init': Rule<[RuleLevel]>;
}
