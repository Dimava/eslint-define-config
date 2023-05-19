import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAbsolutePathRule {
  /**
   * Forbid import of modules using absolute paths.
   *
   * @see [no-absolute-path](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-absolute-path.md)
   */
  'import/no-absolute-path': Rule<
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
