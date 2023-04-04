import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferSpreadRule = {
  /**
   * Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#{slice,toSpliced}()` and `String#split('')`.
   *
   * @see [prefer-spread](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-spread.md)
   */
  'unicorn/prefer-spread': Rule<[RuleLevel]>;
};
