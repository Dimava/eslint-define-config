import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PaddedBlocksRule {
  /**
   * Require or disallow padding within blocks.
   *
   * @see [padded-blocks](https://eslint.org/docs/latest/rules/padded-blocks)
   */
  'padded-blocks': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            blocks?: 'always' | 'never';
            switches?: 'always' | 'never';
            classes?: 'always' | 'never';
          }
      ),
      {
        allowSingleLineBlocks?: boolean;
      },
    ]
  >;
}
