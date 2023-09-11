import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyNamedBlocksRule {
  /**
   * Forbid empty named import blocks.
   *
   * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-empty-named-blocks.md)
   */
  'import/no-empty-named-blocks': Rule<[RuleLevel]>;
}
