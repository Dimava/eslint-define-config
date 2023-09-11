import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNamedAsDefaultRule {
  /**
   * Forbid use of exported name as identifier of default export.
   *
   * @see [no-named-as-default](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-named-as-default.md)
   */
  'import/no-named-as-default': Rule<[RuleLevel]>;
}
