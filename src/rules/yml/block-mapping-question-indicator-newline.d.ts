import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockMappingQuestionIndicatorNewlineRule {
  /**
   * Enforce consistent line breaks after `?` indicator.
   *
   * @see [block-mapping-question-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-question-indicator-newline.html)
   */
  'yml/block-mapping-question-indicator-newline': Rule<
    [RuleLevel, 'always' | 'never']
  >;
}
