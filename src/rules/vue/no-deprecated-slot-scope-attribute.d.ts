import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedSlotScopeAttributeRule = {
  /**
   * Disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+).
   *
   * @see [no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)
   */
  'vue/no-deprecated-slot-scope-attribute': Rule<[RuleLevel]>;
};
