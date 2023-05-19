import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVoidRule {
  /**
   * Disallow `void` operators.
   *
   * @see [no-void](https://eslint.org/docs/rules/no-void)
   */
  'no-void': Rule<
    [
      RuleLevel,
      {
        allowAsStatement?: boolean;
      },
    ]
  >;
}
