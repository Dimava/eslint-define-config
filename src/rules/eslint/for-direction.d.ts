import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ForDirectionRule = {
  /**
   * Enforce "for" loop update clause moving the counter in the right direction.
   *
   * @see [for-direction](https://eslint.org/docs/rules/for-direction)
   */
  'for-direction': Rule<[RuleLevel]>;
};
