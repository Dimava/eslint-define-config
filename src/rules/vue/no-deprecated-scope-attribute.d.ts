import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedScopeAttributeRule {
  /**
   * Disallow deprecated `scope` attribute (in Vue.js 2.5.0+).
   *
   * @see [no-deprecated-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html)
   */
  'vue/no-deprecated-scope-attribute': Rule<[RuleLevel]>;
}
