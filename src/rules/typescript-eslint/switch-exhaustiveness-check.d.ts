import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SwitchExhaustivenessCheckRule {
  /**
   * Require switch-case statements to be exhaustive with union type.
   *
   * @see [switch-exhaustiveness-check](https://typescript-eslint.io/rules/switch-exhaustiveness-check)
   */
  '@typescript-eslint/switch-exhaustiveness-check': Rule<[RuleLevel]>;
}
