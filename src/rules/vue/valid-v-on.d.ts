import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVOnRule = {
  /**
   * Enforce valid `v-on` directives.
   *
   * @see [valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
   */
  'vue/valid-v-on': Rule<
    [
      RuleLevel,
      {
        modifiers?: any[];
      },
    ]
  >;
};
