import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type GetterReturnRule = {
  /**
   * Enforce `return` statements in getters.
   *
   * @see [getter-return](https://eslint.org/docs/rules/getter-return)
   */
  'getter-return': Rule<
    [
      RuleLevel,
      {
        allowImplicit?: boolean;
      },
    ]
  >;
};
