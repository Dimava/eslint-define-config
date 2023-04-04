import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRelativePackagesRule = {
  /**
   * Forbid importing packages through relative paths.
   *
   * @see [no-relative-packages](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-relative-packages.md)
   */
  'import/no-relative-packages': Rule<
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
};
