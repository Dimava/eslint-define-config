import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockMappingColonIndicatorNewlineRule {
  /**
   * Enforce consistent line breaks after `:` indicator.
   *
   * @see [block-mapping-colon-indicator-newline](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping-colon-indicator-newline.html)
   */
  'yml/block-mapping-colon-indicator-newline': Rule<
    [RuleLevel, 'always' | 'never']
  >;
}
