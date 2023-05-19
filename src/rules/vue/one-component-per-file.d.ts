import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface OneComponentPerFileRule {
  /**
   * Enforce that each component should be in its own file.
   *
   * @see [one-component-per-file](https://eslint.vuejs.org/rules/one-component-per-file.html)
   */
  'vue/one-component-per-file': Rule<[RuleLevel]>;
}
