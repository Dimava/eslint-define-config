import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferImportFromVueRule {
  /**
   * Enforce import from 'vue' instead of import from '@vue/*'.
   *
   * @see [prefer-import-from-vue](https://eslint.vuejs.org/rules/prefer-import-from-vue.html)
   */
  'vue/prefer-import-from-vue': Rule<[RuleLevel]>;
}
