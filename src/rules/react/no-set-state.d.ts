import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoSetStateRule {
  /**
   * Disallow usage of setState.
   *
   * @see [no-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-set-state.md)
   */
  'react/no-set-state': Rule<[RuleLevel]>;
}
