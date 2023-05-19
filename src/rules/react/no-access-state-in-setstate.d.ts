import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAccessStateInSetstateRule {
  /**
   * Disallow when this.state is accessed within setState.
   *
   * @see [no-access-state-in-setstate](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md)
   */
  'react/no-access-state-in-setstate': Rule<[RuleLevel]>;
}
