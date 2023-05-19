import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNamedAsDefaultMemberRule {
  /**
   * Forbid use of exported name as property of default export.
   *
   * @see [no-named-as-default-member](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-named-as-default-member.md)
   */
  'import/no-named-as-default-member': Rule<[RuleLevel]>;
}
