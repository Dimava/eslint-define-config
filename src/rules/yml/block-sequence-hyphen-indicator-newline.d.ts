import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockSequenceHyphenIndicatorNewlineRule {
  /**
   * Enforce consistent line breaks after `-` indicator.
   *
   * @see [block-sequence-hyphen-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence-hyphen-indicator-newline.html)
   */
  'yml/block-sequence-hyphen-indicator-newline': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        nestedHyphen?: 'always' | 'never';
      },
    ]
  >;
}
