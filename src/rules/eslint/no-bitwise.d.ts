import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoBitwiseRule {
  /**
   * Disallow bitwise operators.
   *
   * @see [no-bitwise](https://eslint.org/docs/latest/rules/no-bitwise)
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
}
