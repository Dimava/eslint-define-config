import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ConsistentThisRule = {
  /**
   * Enforce consistent naming when capturing the current execution context.
   *
   * @see [consistent-this](https://eslint.org/docs/rules/consistent-this)
   */
  'consistent-this': Rule<[RuleLevel, string[]]>;
};
