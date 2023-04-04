import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoDuplicateAttributesRule = {
  /**
   * Disallow duplication of attributes.
   *
   * @see [no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)
   */
  'vue/no-duplicate-attributes': Rule<
    [
      RuleLevel,
      {
        allowCoexistClass?: boolean;
        allowCoexistStyle?: boolean;
      },
    ]
  >;
};
