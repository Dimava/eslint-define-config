import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DotLocationRule {
  /**
   * Enforce consistent newlines before and after dots.
   *
   * @see [dot-location](https://eslint.org/docs/rules/dot-location)
   */
  'dot-location': Rule<[RuleLevel, 'object' | 'property']>;
}
