import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MultilineTernaryRule {
  /**
   * Enforce newlines between operands of ternary expressions.
   *
   * @see [multiline-ternary](https://eslint.org/docs/latest/rules/multiline-ternary)
   */
  'multiline-ternary': Rule<
    [RuleLevel, 'always' | 'always-multiline' | 'never']
  >;
}
