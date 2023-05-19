import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoDeprecatedRule {
  /**
   * Forbid imported names marked with `@deprecated` documentation tag.
   *
   * @see [no-deprecated](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-deprecated.md)
   */
  'import/no-deprecated': Rule<[RuleLevel]>;
}
