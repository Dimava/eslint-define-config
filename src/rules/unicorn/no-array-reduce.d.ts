import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoArrayReduceRule = {
  /**
   * Disallow `Array#reduce()` and `Array#reduceRight()`.
   *
   * @see [no-array-reduce](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-array-reduce.md)
   */
  'unicorn/no-array-reduce': Rule<
    [
      RuleLevel,
      {
        allowSimpleOperations?: boolean;
      },
    ]
  >;
};
