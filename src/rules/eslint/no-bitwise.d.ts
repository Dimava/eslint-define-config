import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoBitwiseRule = {
  /**
   * Disallow bitwise operators.
   *
   * @see [no-bitwise](https://eslint.org/docs/rules/no-bitwise)
   */
  'no-bitwise': Rule<
    [
      RuleLevel,
      {
        allow?: (
          | '^'
          | '|'
          | '&'
          | '<<'
          | '>>'
          | '>>>'
          | '^='
          | '|='
          | '&='
          | '<<='
          | '>>='
          | '>>>='
          | '~'
        )[];
        int32Hint?: boolean;
      },
    ]
  >;
};
