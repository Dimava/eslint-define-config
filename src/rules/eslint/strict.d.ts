import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface StrictRule {
  /**
   * Require or disallow strict mode directives.
   *
   * @see [strict](https://eslint.org/docs/rules/strict)
   */
  strict: Rule<[RuleLevel, 'never' | 'global' | 'function' | 'safe']>;
}
