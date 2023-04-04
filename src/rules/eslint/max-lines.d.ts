import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MaxLinesRule = {
  /**
   * Enforce a maximum number of lines per file.
   *
   * @see [max-lines](https://eslint.org/docs/rules/max-lines)
   */
  'max-lines': Rule<
    [
      RuleLevel,
      (
        | number
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
          }
      ),
    ]
  >;
};
