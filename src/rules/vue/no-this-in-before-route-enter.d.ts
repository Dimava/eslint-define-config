import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThisInBeforeRouteEnterRule = {
  /**
   * Disallow `this` usage in a `beforeRouteEnter` method.
   *
   * @see [no-this-in-before-route-enter](https://eslint.vuejs.org/rules/no-this-in-before-route-enter.html)
   */
  'vue/no-this-in-before-route-enter': Rule<[RuleLevel]>;
};
