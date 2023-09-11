import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockSequenceRule {
  /**
   * Require or disallow block style sequences.
   *
   * @see [block-sequence](https://ota-meshi.github.io/eslint-plugin-yml/rules/block-sequence.html)
   */
  'yml/block-sequence': Rule<
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
