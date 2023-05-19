import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentGenericConstructorsRule {
  /**
   * Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
   *
   * @see [consistent-generic-constructors](https://typescript-eslint.io/rules/consistent-generic-constructors)
   */
  '@typescript-eslint/consistent-generic-constructors': Rule<
    [RuleLevel, 'type-annotation' | 'constructor']
  >;
}
