import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAmdRule {
  /**
   * Forbid AMD `require` and `define` calls.
   *
   * @see [no-amd](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-amd.md)
   */
  'import/no-amd': Rule<[RuleLevel]>;
}
