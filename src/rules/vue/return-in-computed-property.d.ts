import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ReturnInComputedPropertyRule {
  /**
   * Enforce that a return statement is present in computed property.
   *
   * @see [return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html)
   */
  'vue/return-in-computed-property': Rule<
    [
      RuleLevel,
      {
        treatUndefinedAsUnspecified?: boolean;
      },
    ]
  >;
}
