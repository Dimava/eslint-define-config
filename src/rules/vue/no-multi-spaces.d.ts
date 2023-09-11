import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMultiSpacesRule {
  /**
   * Disallow multiple spaces.
   *
   * @see [no-multi-spaces](https://eslint.vuejs.org/rules/no-multi-spaces.html)
   */
  'vue/no-multi-spaces': Rule<
    [
      RuleLevel,
      {
        ignoreProperties?: boolean;
      },
    ]
  >;
}
