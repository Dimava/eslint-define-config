import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedHtmlElementIsRule = {
  /**
   * Disallow using deprecated the `is` attribute on HTML elements (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-html-element-is](https://eslint.vuejs.org/rules/no-deprecated-html-element-is.html)
   */
  'vue/no-deprecated-html-element-is': Rule<[RuleLevel]>;
};
