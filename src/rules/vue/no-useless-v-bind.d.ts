import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessVBindRule = {
  /**
   * Disallow unnecessary `v-bind` directives.
   *
   * @see [no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)
   */
  'vue/no-useless-v-bind': Rule<
    [
      RuleLevel,
      {
        ignoreIncludesComment?: boolean;
        ignoreStringEscape?: boolean;
      },
    ]
  >;
};
