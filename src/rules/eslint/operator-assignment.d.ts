import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface OperatorAssignmentRule {
  /**
   * Require or disallow assignment operator shorthand where possible.
   *
   * @see [operator-assignment](https://eslint.org/docs/latest/rules/operator-assignment)
   */
  'operator-assignment': Rule<[RuleLevel, 'always' | 'never']>;
}
