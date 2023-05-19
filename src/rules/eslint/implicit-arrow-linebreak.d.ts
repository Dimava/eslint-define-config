import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ImplicitArrowLinebreakRule {
  /**
   * Enforce the location of arrow function bodies.
   *
   * @see [implicit-arrow-linebreak](https://eslint.org/docs/rules/implicit-arrow-linebreak)
   */
  'implicit-arrow-linebreak': Rule<[RuleLevel, 'beside' | 'below']>;
}
