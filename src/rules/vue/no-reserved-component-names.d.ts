import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoReservedComponentNamesRule = {
  /**
   * Disallow the use of reserved names in component definitions.
   *
   * @see [no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html)
   */
  'vue/no-reserved-component-names': Rule<
    [
      RuleLevel,
      {
        disallowVueBuiltInComponents?: boolean;
        disallowVue3BuiltInComponents?: boolean;
      },
    ]
  >;
};
