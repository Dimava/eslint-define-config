import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedDataObjectDeclarationRule {
  /**
   * Disallow using deprecated object declaration on data (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html)
   */
  'vue/no-deprecated-data-object-declaration': Rule<[RuleLevel]>;
}
