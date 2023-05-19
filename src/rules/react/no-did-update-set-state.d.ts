import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDidUpdateSetStateRule {
  /**
   * Disallow usage of setState in componentDidUpdate.
   *
   * @see [no-did-update-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md)
   */
  'react/no-did-update-set-state': Rule<[RuleLevel, 'disallow-in-func']>;
}
