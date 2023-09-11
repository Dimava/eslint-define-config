import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface VOnHandlerStyleRule {
  /**
   * Enforce writing style for handlers in `v-on` directives.
   *
   * @see [v-on-handler-style](https://eslint.vuejs.org/rules/v-on-handler-style.html)
   */
  'vue/v-on-handler-style': Rule<
    [
      RuleLevel,
      ('inline' | 'inline-function') | ['method', 'inline' | 'inline-function'],
      {
        ignoreIncludesComment?: boolean;
      },
    ]
  >;
}
