import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireDescriptionCompleteSentenceRule {
  /**
   * Requires that block description, explicit `@description`, and `@param`/`@returns` tag descriptions are written in complete sentences.
   *
   * @see [require-description-complete-sentence](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description-complete-sentence)
   */
  'jsdoc/require-description-complete-sentence': Rule<
    [
      RuleLevel,
      {
        abbreviations?: string[];
        newlineBeforeCapsAssumesBadSentenceEnd?: boolean;
        tags?: string[];
      },
    ]
  >;
}
