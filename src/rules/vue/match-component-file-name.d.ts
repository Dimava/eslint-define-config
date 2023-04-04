import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MatchComponentFileNameRule = {
  /**
   * Require component name property to match its file name.
   *
   * @see [match-component-file-name](https://eslint.vuejs.org/rules/match-component-file-name.html)
   */
  'vue/match-component-file-name': Rule<
    [
      RuleLevel,
      {
        extensions?: string[];
        shouldMatchCase?: boolean;
      },
    ]
  >;
};
