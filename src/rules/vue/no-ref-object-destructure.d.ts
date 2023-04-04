import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRefObjectDestructureRule = {
  /**
   * Disallow destructuring of ref objects that can lead to loss of reactivity.
   *
   * @see [no-ref-object-destructure](https://eslint.vuejs.org/rules/no-ref-object-destructure.html)
   */
  'vue/no-ref-object-destructure': Rule<[RuleLevel]>;
};
