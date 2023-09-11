import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ThisInTemplateRule {
  /**
   * Disallow usage of `this` in template.
   *
   * @see [this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)
   */
  'vue/this-in-template': Rule<[RuleLevel, 'always' | 'never']>;
}
