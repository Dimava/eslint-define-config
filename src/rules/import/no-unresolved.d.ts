import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnresolvedRule {
  /**
   * Ensure imports point to a file/module that can be resolved.
   *
   * @see [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unresolved.md)
   */
  'import/no-unresolved': Rule<
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
        caseSensitive?: boolean;
        caseSensitiveStrict?: boolean;
      },
    ]
  >;
}
