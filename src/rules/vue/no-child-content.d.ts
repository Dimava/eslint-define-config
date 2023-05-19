import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoChildContentRule {
  /**
   * Disallow element's child contents which would be overwritten by a directive like `v-html` or `v-text`.
   *
   * @see [no-child-content](https://eslint.vuejs.org/rules/no-child-content.html)
   */
  'vue/no-child-content': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        additionalDirectives: [string, ...string[]];
      },
    ]
  >;
}
