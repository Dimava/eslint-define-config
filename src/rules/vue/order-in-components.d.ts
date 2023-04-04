import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type OrderInComponentsRule = {
  /**
   * Enforce order of properties in components.
   *
   * @see [order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)
   */
  'vue/order-in-components': Rule<
    [
      RuleLevel,
      {
        order?: any[];
      },
    ]
  >;
};
