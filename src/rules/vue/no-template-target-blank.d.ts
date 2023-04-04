import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTemplateTargetBlankRule = {
  /**
   * Disallow target="_blank" attribute without rel="noopener noreferrer".
   *
   * @see [no-template-target-blank](https://eslint.vuejs.org/rules/no-template-target-blank.html)
   */
  'vue/no-template-target-blank': Rule<
    [
      RuleLevel,
      {
        allowReferrer?: boolean;
        enforceDynamicLinks?: 'always' | 'never';
      },
    ]
  >;
};
