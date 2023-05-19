import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface GroupExportsRule {
  /**
   * Prefer named exports to be grouped together in a single export declaration.
   *
   * @see [group-exports](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/group-exports.md)
   */
  'import/group-exports': Rule<[RuleLevel]>;
}
