import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MultiWordComponentNamesRule {
  /**
   * Require component names to be always multi-word.
   *
   * @see [multi-word-component-names](https://eslint.vuejs.org/rules/multi-word-component-names.html)
   */
  'vue/multi-word-component-names': Rule<
    [
      RuleLevel,
      {
        ignores?: string[];
      },
    ]
  >;
}
