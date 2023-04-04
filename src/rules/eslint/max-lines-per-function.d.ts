import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MaxLinesPerFunctionRule = {
  /**
   * Enforce a maximum number of lines of code in a function.
   *
   * @see [max-lines-per-function](https://eslint.org/docs/rules/max-lines-per-function)
   */
  'max-lines-per-function': Rule<
    [
      RuleLevel,
      (
        | {
            max?: number;
            skipComments?: boolean;
            skipBlankLines?: boolean;
            IIFEs?: boolean;
          }
        | number
      ),
    ]
  >;
};
