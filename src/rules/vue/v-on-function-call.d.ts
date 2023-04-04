import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type VOnFunctionCallRule = {
  /**
   * Enforce or forbid parentheses after method calls without arguments in `v-on` directives.
   *
   * @deprecated
   *
   * @see [v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)
   */
  'vue/v-on-function-call': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        ignoreIncludesComment?: boolean;
      },
    ]
  >;
};
