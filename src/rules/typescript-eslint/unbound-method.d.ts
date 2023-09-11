import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface UnboundMethodRule {
  /**
   * Enforce unbound methods are called with their expected scope.
   *
   * @see [unbound-method](https://typescript-eslint.io/rules/unbound-method)
   */
  '@typescript-eslint/unbound-method': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to skip checking whether `static` methods are correctly bound.
         */
        ignoreStatic?: boolean;
      },
    ]
  >;
}
