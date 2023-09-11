import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockOrderRule {
  /**
   * Enforce order of component top-level elements.
   *
   * @see [block-order](https://eslint.vuejs.org/rules/block-order.html)
   */
  'vue/block-order': Rule<
    [
      RuleLevel,
      {
        order?: (string | string[])[];
      },
    ]
  >;
}
