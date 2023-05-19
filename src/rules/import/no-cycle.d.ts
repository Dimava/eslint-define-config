import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoCycleRule {
  /**
   * Forbid a module from importing a module with a dependency path back to itself.
   *
   * @see [no-cycle](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-cycle.md)
   */
  'import/no-cycle': Rule<
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
        maxDepth?: number | '∞';
        /**
         * ignore external modules
         */
        ignoreExternal?: boolean;
        /**
         * Allow cyclic dependency if there is at least one dynamic import in the chain
         */
        allowUnsafeDynamicCyclicDependency?: boolean;
      },
    ]
  >;
}
