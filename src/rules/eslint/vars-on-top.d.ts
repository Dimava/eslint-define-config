import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface VarsOnTopRule {
  /**
   * Require `var` declarations be placed at the top of their containing scope.
   *
   * @see [vars-on-top](https://eslint.org/docs/rules/vars-on-top)
   */
  'vars-on-top': Rule<[RuleLevel]>;
}
