import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConstructorSuperRule {
  /**
   * Require `super()` calls in constructors.
   *
   * @see [constructor-super](https://eslint.org/docs/latest/rules/constructor-super)
   */
  'constructor-super': Rule<[RuleLevel]>;
}
