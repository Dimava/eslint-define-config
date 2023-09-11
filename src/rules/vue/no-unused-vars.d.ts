import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedVarsRule {
  /**
   * Disallow unused variable definitions of v-for directives or scope attributes.
   *
   * @see [no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)
   */
  'vue/no-unused-vars': Rule<
    [
      RuleLevel,
      {
        ignorePattern?: string;
      },
    ]
  >;
}
