import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferTrueAttributeShorthandRule = {
  /**
   * Require shorthand form attribute when `v-bind` value is `true`.
   *
   * @see [prefer-true-attribute-shorthand](https://eslint.vuejs.org/rules/prefer-true-attribute-shorthand.html)
   */
  'vue/prefer-true-attribute-shorthand': Rule<[RuleLevel, 'always' | 'never']>;
};
