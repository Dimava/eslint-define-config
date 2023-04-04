import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDeprecatedInlineTemplateRule = {
  /**
   * Disallow using deprecated `inline-template` attribute (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-inline-template](https://eslint.vuejs.org/rules/no-deprecated-inline-template.html)
   */
  'vue/no-deprecated-inline-template': Rule<[RuleLevel]>;
};
