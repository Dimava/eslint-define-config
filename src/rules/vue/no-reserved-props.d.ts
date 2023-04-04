import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoReservedPropsRule = {
  /**
   * Disallow reserved names in props.
   *
   * @see [no-reserved-props](https://eslint.vuejs.org/rules/no-reserved-props.html)
   */
  'vue/no-reserved-props': Rule<
    [
      RuleLevel,
      {
        vueVersion?: 2 | 3;
      },
    ]
  >;
};
