import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface GetterReturnRule {
  /**
   * Enforce `return` statements in getters.
   *
   * @see [getter-return](https://eslint.org/docs/latest/rules/getter-return)
   */
  'getter-return': Rule<
    [
      RuleLevel,
      {
        allowImplicit?: boolean;
      },
    ]
  >;
}
