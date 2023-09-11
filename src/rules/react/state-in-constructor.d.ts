import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface StateInConstructorRule {
  /**
   * Enforce class component state initialization style.
   *
   * @see [state-in-constructor](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md)
   */
  'react/state-in-constructor': Rule<[RuleLevel, 'always' | 'never']>;
}
