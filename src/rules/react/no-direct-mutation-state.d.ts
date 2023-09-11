import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDirectMutationStateRule {
  /**
   * Disallow direct mutation of this.state.
   *
   * @see [no-direct-mutation-state](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md)
   */
  'react/no-direct-mutation-state': Rule<[RuleLevel]>;
}
