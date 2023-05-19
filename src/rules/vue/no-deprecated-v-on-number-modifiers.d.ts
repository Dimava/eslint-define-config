import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedVOnNumberModifiersRule {
  /**
   * Disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+).
   *
   * @see [no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)
   */
  'vue/no-deprecated-v-on-number-modifiers': Rule<[RuleLevel]>;
}
