import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedSlotAttributeRule = {
  /**
   * Disallow deprecated `slot` attribute (in Vue.js 2.6.0+).
   *
   * @see [no-deprecated-slot-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-attribute.html)
   */
  'vue/no-deprecated-slot-attribute': Rule<[RuleLevel]>;
};
