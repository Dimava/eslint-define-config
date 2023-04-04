import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoVHtmlRule = {
  /**
   * Disallow use of v-html to prevent XSS attack.
   *
   * @see [no-v-html](https://eslint.vuejs.org/rules/no-v-html.html)
   */
  'vue/no-v-html': Rule<[RuleLevel]>;
};
