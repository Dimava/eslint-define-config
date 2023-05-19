import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DefaultRule {
  /**
   * Ensure a default export is present, given a default import.
   *
   * @see [default](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/default.md)
   */
  'import/default': Rule<[RuleLevel]>;
}
