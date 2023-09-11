import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoFloatingPromisesRule {
  /**
   * Require Promise-like statements to be handled appropriately.
   *
   * @see [no-floating-promises](https://typescript-eslint.io/rules/no-floating-promises)
   */
  '@typescript-eslint/no-floating-promises': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to ignore `void` expressions.
         */
        ignoreVoid?: boolean;
        /**
         * Whether to ignore async IIFEs (Immediately Invocated Function Expressions).
         */
        ignoreIIFE?: boolean;
      },
    ]
  >;
}
