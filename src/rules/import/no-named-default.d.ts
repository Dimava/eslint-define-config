import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNamedDefaultRule {
  /**
   * Forbid named default exports.
   *
   * @see [no-named-default](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-named-default.md)
   */
  'import/no-named-default': Rule<[RuleLevel]>;
}
