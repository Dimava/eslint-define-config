import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferFlatMapRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-flat-map)
   */
  'unicorn/prefer-flat-map': Rule<[RuleLevel]>;
}
