import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVTextVHtmlOnComponentRule {
  /**
   * Disallow v-text / v-html on component.
   *
   * @see [no-v-text-v-html-on-component](https://eslint.vuejs.org/rules/no-v-text-v-html-on-component.html)
   */
  'vue/no-v-text-v-html-on-component': Rule<[RuleLevel]>;
}
