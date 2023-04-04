import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NewLineBetweenMultiLinePropertyRule = {
  /**
   * Enforce new lines between multi-line properties in Vue components.
   *
   * @see [new-line-between-multi-line-property](https://eslint.vuejs.org/rules/new-line-between-multi-line-property.html)
   */
  'vue/new-line-between-multi-line-property': Rule<
    [
      RuleLevel,
      {
        minLineOfMultilineProperty?: number;
      },
    ]
  >;
};
