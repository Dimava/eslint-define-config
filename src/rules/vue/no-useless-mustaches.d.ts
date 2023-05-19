import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessMustachesRule {
  /**
   * Disallow unnecessary mustache interpolations.
   *
   * @see [no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)
   */
  'vue/no-useless-mustaches': Rule<
    [
      RuleLevel,
      {
        ignoreIncludesComment?: boolean;
        ignoreStringEscape?: boolean;
      },
    ]
  >;
}
