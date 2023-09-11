import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMisusedPromisesRule {
  /**
   * Disallow Promises in places not designed to handle them.
   *
   * @see [no-misused-promises](https://typescript-eslint.io/rules/no-misused-promises)
   */
  '@typescript-eslint/no-misused-promises': Rule<
    [
      RuleLevel,
      {
        checksConditionals?: boolean;
        checksVoidReturn?:
          | boolean
          | {
              arguments?: boolean;
              attributes?: boolean;
              properties?: boolean;
              returns?: boolean;
              variables?: boolean;
            };
        checksSpreads?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
