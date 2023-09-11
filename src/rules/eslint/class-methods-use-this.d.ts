import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ClassMethodsUseThisRule {
  /**
   * Enforce that class methods utilize `this`.
   *
   * @see [class-methods-use-this](https://eslint.org/docs/latest/rules/class-methods-use-this)
   */
  'class-methods-use-this': Rule<
    [
      RuleLevel,
      {
        exceptMethods?: string[];
        enforceForClassFields?: boolean;
      },
    ]
  >;
}
