import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVHtmlRule = {
  /**
   * Enforce valid `v-html` directives.
   *
   * @see [valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)
   */
  'vue/valid-v-html': Rule<[RuleLevel]>;
};
