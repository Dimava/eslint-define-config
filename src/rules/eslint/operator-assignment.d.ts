import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type OperatorAssignmentRule = {
  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * @see [operator-assignment](https://eslint.org/docs/rules/operator-assignment)
   */
  'operator-assignment': Rule<[RuleLevel, 'always' | 'never']>;
};
