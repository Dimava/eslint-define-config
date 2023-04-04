import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoReservedKeysRule = {
  /**
   * Disallow overwriting reserved keys.
   *
   * @see [no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)
   */
  'vue/no-reserved-keys': Rule<
    [
      RuleLevel,
      {
        reserved?: any[];
        groups?: any[];
      },
    ]
  >;
};
