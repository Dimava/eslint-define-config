import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInvalidVoidTypeRule {
  /**
   * Disallow `void` type outside of generic or return types.
   *
   * @see [no-invalid-void-type](https://typescript-eslint.io/rules/no-invalid-void-type)
   */
  '@typescript-eslint/no-invalid-void-type': Rule<
    [
      RuleLevel,
      {
        allowInGenericTypeArguments?: boolean | string[];
        allowAsThisParameter?: boolean;
      },
    ]
  >;
}
