import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThrowLiteralRule = {
  /**
   * Disallow throwing literals as exceptions.
   *
   * @see [no-throw-literal](https://typescript-eslint.io/rules/no-throw-literal)
   */
  '@typescript-eslint/no-throw-literal': Rule<
    [
      RuleLevel,
      {
        allowThrowingAny?: boolean;
        allowThrowingUnknown?: boolean;
      },
    ]
  >;
};
