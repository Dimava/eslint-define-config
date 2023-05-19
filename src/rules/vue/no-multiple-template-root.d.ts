import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultipleTemplateRootRule {
  /**
   * Disallow adding multiple root nodes to the template.
   *
   * @see [no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html)
   */
  'vue/no-multiple-template-root': Rule<[RuleLevel]>;
}
