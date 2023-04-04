import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSharedComponentDataRule = {
  /**
   * Enforce component's data property to be a function.
   *
   * @see [no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)
   */
  'vue/no-shared-component-data': Rule<[RuleLevel]>;
};
