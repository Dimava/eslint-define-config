import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type VSlotStyleRule = {
  /**
   * Enforce `v-slot` directive style.
   *
   * @see [v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)
   */
  'vue/v-slot-style': Rule<
    [
      RuleLevel,
      (
        | ('shorthand' | 'longform')
        | {
            atComponent?: 'shorthand' | 'longform' | 'v-slot';
            default?: 'shorthand' | 'longform' | 'v-slot';
            named?: 'shorthand' | 'longform';
          }
      ),
    ]
  >;
};
