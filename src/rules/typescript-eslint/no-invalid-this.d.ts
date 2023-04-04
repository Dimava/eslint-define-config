import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoInvalidThisRule = {
  /**
   * Disallow `this` keywords outside of classes or class-like objects.
   *
   * @see [no-invalid-this](https://typescript-eslint.io/rules/no-invalid-this)
   */
  '@typescript-eslint/no-invalid-this': Rule<
    [
      RuleLevel,
      {
        capIsConstructor?: boolean;
      },
    ]
  >;
};
