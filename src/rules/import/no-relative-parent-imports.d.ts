import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoRelativeParentImportsRule {
  /**
   * Forbid importing modules from parent directories.
   *
   * @see [no-relative-parent-imports](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-relative-parent-imports.md)
   */
  'import/no-relative-parent-imports': Rule<
    [
      RuleLevel,
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        /**
         * @minItems 1
         */
        ignore?: [string, ...string[]];
      },
    ]
  >;
}
