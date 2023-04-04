import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceBeforeBlocksRule = {
  /**
   * Enforce consistent spacing before blocks.
   *
   * @see [space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)
   */
  'space-before-blocks': Rule<
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
};
