import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoCustomModifiersOnVModelRule = {
  /**
   * Disallow custom modifiers on v-model used on the component.
   *
   * @see [no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)
   */
  'vue/no-custom-modifiers-on-v-model': Rule<[RuleLevel]>;
};
