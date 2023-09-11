import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMutableExportsRule {
  /**
   * Forbid the use of mutable exports with `var` or `let`.
   *
   * @see [no-mutable-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-mutable-exports.md)
   */
  'import/no-mutable-exports': Rule<[RuleLevel]>;
}
