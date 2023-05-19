import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface VOnEventHyphenationRule {
  /**
   * Enforce v-on event naming style on custom components in template.
   *
   * @see [v-on-event-hyphenation](https://eslint.vuejs.org/rules/v-on-event-hyphenation.html)
   */
  'vue/v-on-event-hyphenation': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        autofix?: boolean;
        ignore?: string[];
      },
    ]
  >;
}
