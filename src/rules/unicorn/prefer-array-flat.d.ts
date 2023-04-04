import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferArrayFlatRule = {
  /**
   * Prefer `Array#flat()` over legacy techniques to flatten arrays.
   *
   * @see [prefer-array-flat](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-array-flat.md)
   */
  'unicorn/prefer-array-flat': Rule<
    [
      RuleLevel,
      {
        functions?: any[];
      },
    ]
  >;
};
