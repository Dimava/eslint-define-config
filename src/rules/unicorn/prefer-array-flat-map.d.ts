import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferArrayFlatMapRule {
  /**
   * Prefer `.flatMap(…)` over `.map(…).flat()`.
   *
   * @see [prefer-array-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/prefer-array-flat-map.md)
   */
  'unicorn/prefer-array-flat-map': Rule<[RuleLevel]>;
}
