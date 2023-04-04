import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoImportAssignRule = {
  /**
   * Disallow assigning to imported bindings.
   *
   * @see [no-import-assign](https://eslint.org/docs/rules/no-import-assign)
   */
  'no-import-assign': Rule<[RuleLevel]>;
};
