import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type DotLocationRule = {
  /**
   * Enforce consistent newlines before and after dots.
   *
   * @see [dot-location](https://eslint.org/docs/rules/dot-location)
   */
  'dot-location': Rule<[RuleLevel, 'object' | 'property']>;
};
