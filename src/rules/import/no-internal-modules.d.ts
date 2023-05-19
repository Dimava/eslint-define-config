import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInternalModulesRule {
  /**
   * Forbid importing the submodules of other modules.
   *
   * @see [no-internal-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-internal-modules.md)
   */
  'import/no-internal-modules': Rule<
    [
      RuleLevel,
      (
        | {
            allow?: string[];
          }
        | {
            forbid?: string[];
          }
      ),
    ]
  >;
}
