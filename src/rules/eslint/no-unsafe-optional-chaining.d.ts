import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnsafeOptionalChainingRule {
  /**
   * Disallow use of optional chaining in contexts where the `undefined` value is not allowed.
   *
   * @see [no-unsafe-optional-chaining](https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining)
   */
  'no-unsafe-optional-chaining': Rule<
    [
      RuleLevel,
      {
        disallowArithmeticOperators?: boolean;
      },
    ]
  >;
}
