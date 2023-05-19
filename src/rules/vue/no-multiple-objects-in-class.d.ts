import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultipleObjectsInClassRule {
  /**
   * Disallow to pass multiple objects into array to class.
   *
   * @see [no-multiple-objects-in-class](https://eslint.vuejs.org/rules/no-multiple-objects-in-class.html)
   */
  'vue/no-multiple-objects-in-class': Rule<[RuleLevel]>;
}
