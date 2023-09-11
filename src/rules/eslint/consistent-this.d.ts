import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentThisRule {
  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * @see [consistent-this](https://eslint.org/docs/latest/rules/consistent-this)
   */
  'consistent-this': Rule<[RuleLevel, ...string[]]>;
}
