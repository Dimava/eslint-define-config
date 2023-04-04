import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type StaticClassNamesOrderRule = {
  /**
   * Enforce static class names order.
   *
   * @see [static-class-names-order](https://eslint.vuejs.org/rules/static-class-names-order.html)
   */
  'vue/static-class-names-order': Rule<[RuleLevel]>;
};
