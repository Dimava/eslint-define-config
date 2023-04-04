import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEmptyNamedBlocksRule = {
  /**
   * Forbid empty named import blocks.
   *
   * @see [no-empty-named-blocks](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-empty-named-blocks.md)
   */
  'import/no-empty-named-blocks': Rule<[RuleLevel]>;
};
