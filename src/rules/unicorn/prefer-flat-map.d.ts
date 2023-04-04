import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferFlatMapRule = {
  /**
   *
   * @deprecated
   *
   * @see [prefer-flat-map](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-flat-map)
   */
  'unicorn/prefer-flat-map': Rule<[RuleLevel]>;
};
