import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidVSlotRule = {
  /**
   * Enforce valid `v-slot` directives.
   *
   * @see [valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)
   */
  'vue/valid-v-slot': Rule<
    [
      RuleLevel,
      {
        allowModifiers?: boolean;
      },
    ]
  >;
};
