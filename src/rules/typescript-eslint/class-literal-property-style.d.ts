import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ClassLiteralPropertyStyleRule {
  /**
   * Enforce that literals on classes are exposed in a consistent style.
   *
   * @see [class-literal-property-style](https://typescript-eslint.io/rules/class-literal-property-style)
   */
  '@typescript-eslint/class-literal-property-style': Rule<
    [RuleLevel, 'fields' | 'getters']
  >;
}
