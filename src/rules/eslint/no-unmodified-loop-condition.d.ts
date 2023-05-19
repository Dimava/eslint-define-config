import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnmodifiedLoopConditionRule {
  /**
   * Disallow unmodified loop conditions.
   *
   * @see [no-unmodified-loop-condition](https://eslint.org/docs/rules/no-unmodified-loop-condition)
   */
  'no-unmodified-loop-condition': Rule<[RuleLevel]>;
}
