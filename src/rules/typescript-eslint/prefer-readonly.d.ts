import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferReadonlyRule = {
  /**
   * Require private members to be marked as `readonly` if they're never modified outside of the constructor.
   *
   * @see [prefer-readonly](https://typescript-eslint.io/rules/prefer-readonly)
   */
  '@typescript-eslint/prefer-readonly': Rule<
    [
      RuleLevel,
      {
        onlyInlineLambdas?: boolean;
        [k: string]: any;
      },
    ]
  >;
};
