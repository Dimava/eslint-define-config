import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWillUpdateSetStateRule {
  /**
   * Disallow usage of setState in componentWillUpdate.
   *
   * @see [no-will-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md)
   */
  'react/no-will-update-set-state': Rule<[RuleLevel, 'disallow-in-func']>;
}
