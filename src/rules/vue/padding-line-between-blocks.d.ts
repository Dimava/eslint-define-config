import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PaddingLineBetweenBlocksRule {
  /**
   * Require or disallow padding lines between blocks.
   *
   * @see [padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html)
   */
  'vue/padding-line-between-blocks': Rule<[RuleLevel, 'never' | 'always']>;
}
