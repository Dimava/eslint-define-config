import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrayCallbackReturnRule {
  /**
   * Enforce `return` statements in callbacks of array methods.
   *
   * @see [array-callback-return](https://eslint.org/docs/rules/array-callback-return)
   */
  'array-callback-return': Rule<
    [
      RuleLevel,
      {
        allowImplicit?: boolean;
        checkForEach?: boolean;
      },
    ]
  >;
}
