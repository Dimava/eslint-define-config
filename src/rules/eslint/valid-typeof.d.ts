import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidTypeofRule = {
  /**
   * Enforce comparing `typeof` expressions against valid strings.
   *
   * @see [valid-typeof](https://eslint.org/docs/rules/valid-typeof)
   */
  'valid-typeof': Rule<
    [
      RuleLevel,
      {
        requireStringLiterals?: boolean;
      },
    ]
  >;
};
