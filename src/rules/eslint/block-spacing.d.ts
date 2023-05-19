import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface BlockSpacingRule {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block.
   *
   * @see [block-spacing](https://eslint.org/docs/rules/block-spacing)
   */
  'block-spacing': Rule<[RuleLevel, 'always' | 'never']>;
}
