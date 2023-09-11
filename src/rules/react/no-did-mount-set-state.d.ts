import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDidMountSetStateRule {
  /**
   * Disallow usage of setState in componentDidMount.
   *
   * @see [no-did-mount-set-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md)
   */
  'react/no-did-mount-set-state': Rule<[RuleLevel, 'disallow-in-func']>;
}
