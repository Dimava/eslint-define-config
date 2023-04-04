import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSideEffectsInComputedPropertiesRule = {
  /**
   * Disallow side effects in computed properties.
   *
   * @see [no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html)
   */
  'vue/no-side-effects-in-computed-properties': Rule<[RuleLevel]>;
};
