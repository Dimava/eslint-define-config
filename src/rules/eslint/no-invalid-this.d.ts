import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInvalidThisRule {
  /**
   * Disallow use of `this` in contexts where the value of `this` is `undefined`.
   *
   * @see [no-invalid-this](https://eslint.org/docs/latest/rules/no-invalid-this)
   */
  'no-invalid-this': Rule<
    [
      RuleLevel,
      {
        capIsConstructor?: boolean;
      },
    ]
  >;
}
