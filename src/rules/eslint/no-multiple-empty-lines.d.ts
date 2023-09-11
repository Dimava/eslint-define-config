import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultipleEmptyLinesRule {
  /**
   * Disallow multiple empty lines.
   *
   * @see [no-multiple-empty-lines](https://eslint.org/docs/latest/rules/no-multiple-empty-lines)
   */
  'no-multiple-empty-lines': Rule<
    [
      RuleLevel,
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      },
    ]
  >;
}
