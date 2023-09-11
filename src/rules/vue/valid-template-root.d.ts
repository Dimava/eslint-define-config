import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidTemplateRootRule {
  /**
   * Enforce valid template root.
   *
   * @see [valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)
   */
  'vue/valid-template-root': Rule<[RuleLevel]>;
}
