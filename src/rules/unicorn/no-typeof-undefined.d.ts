import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTypeofUndefinedRule = {
  /**
   * Disallow comparing `undefined` using `typeof`.
   *
   * @see [no-typeof-undefined](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-typeof-undefined.md)
   */
  'unicorn/no-typeof-undefined': Rule<
    [
      RuleLevel,
      {
        checkGlobalVariables?: boolean;
      },
    ]
  >;
};
