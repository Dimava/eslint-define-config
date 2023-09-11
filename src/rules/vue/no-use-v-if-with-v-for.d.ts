import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUseVIfWithVForRule {
  /**
   * Disallow using `v-if` on the same element as `v-for`.
   *
   * @see [no-use-v-if-with-v-for](https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html)
   */
  'vue/no-use-v-if-with-v-for': Rule<
    [
      RuleLevel,
      {
        allowUsingIterationVar?: boolean;
      },
    ]
  >;
}
