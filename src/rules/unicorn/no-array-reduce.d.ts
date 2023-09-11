import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoArrayReduceRule {
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   *
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': Rule<
    [
      RuleLevel,
      {
        allowSimpleOperations?: boolean;
      },
    ]
  >;
}
