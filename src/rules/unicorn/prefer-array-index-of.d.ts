import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferArrayIndexOfRule {
  /**
   * Prefer `Array#{indexOf,lastIndexOf}()` over `Array#{findIndex,findLastIndex}()` when looking for the index of an item.
   *
   * @see [prefer-array-index-of](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-index-of.md)
   */
  'unicorn/prefer-array-index-of': Rule<[RuleLevel]>;
}
