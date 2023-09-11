import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockMappingRule {
  /**
   * Require or disallow block style mappings.
   *
   * @see [block-mapping](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-mapping.html)
   */
  'yml/block-mapping': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            singleline?: 'always' | 'never' | 'ignore';
            multiline?: 'always' | 'never' | 'ignore';
          }
      ),
    ]
  >;
}
