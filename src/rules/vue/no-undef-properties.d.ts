import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUndefPropertiesRule = {
  /**
   * Disallow undefined properties.
   *
   * @see [no-undef-properties](https://eslint.vuejs.org/rules/no-undef-properties.html)
   */
  'vue/no-undef-properties': Rule<
    [
      RuleLevel,
      {
        ignores?: string[];
      },
    ]
  >;
};
