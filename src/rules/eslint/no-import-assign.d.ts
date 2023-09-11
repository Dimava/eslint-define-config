import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoImportAssignRule {
  /**
   * Disallow assigning to imported bindings.
   *
   * @see [no-import-assign](https://eslint.org/docs/latest/rules/no-import-assign)
   */
  'no-import-assign': Rule<[RuleLevel]>;
}
