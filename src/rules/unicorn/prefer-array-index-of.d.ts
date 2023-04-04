import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferArrayIndexOfRule = {
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   *
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': Rule<[RuleLevel]>;
};
