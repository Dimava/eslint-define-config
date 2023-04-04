import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ComponentTagsOrderRule = {
  /**
   * Enforce order of component top-level elements.
   *
   * @see [component-tags-order](https://eslint.vuejs.org/rules/component-tags-order.html)
   */
  'vue/component-tags-order': Rule<
    [
      RuleLevel,
      {
        order?: (string | string[])[];
      },
    ]
  >;
};
