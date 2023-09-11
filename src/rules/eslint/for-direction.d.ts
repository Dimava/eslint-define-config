import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ForDirectionRule {
  /**
   * Enforce "for" loop update clause moving the counter in the right direction.
   *
   * @see [for-direction](https://eslint.org/docs/latest/rules/for-direction)
   */
  'for-direction': Rule<[RuleLevel]>;
}
