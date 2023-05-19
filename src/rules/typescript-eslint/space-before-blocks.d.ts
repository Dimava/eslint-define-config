import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceBeforeBlocksRule {
  /**
   * Enforce consistent spacing before blocks.
   *
   * @see [space-before-blocks](https://typescript-eslint.io/rules/space-before-blocks)
   */
  '@typescript-eslint/space-before-blocks': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never')
        | {
            keywords?: 'always' | 'never' | 'off';
            functions?: 'always' | 'never' | 'off';
            classes?: 'always' | 'never' | 'off';
          }
      ),
    ]
  >;
}
