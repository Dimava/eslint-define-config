import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedModulesRule {
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   *
   * @see [no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/no-unused-modules.md)
   */
  'import/no-unused-modules': Rule<
    [
      RuleLevel,
      (
        | {
            unusedExports: true;
            src?: {
              [k: string]: any;
            };
            [k: string]: any;
          }
        | {
            missingExports: true;
            [k: string]: any;
          }
      ) & {
        /**
         * files/paths to be analyzed (only for unused exports)
         */
        src?: string[];
        /**
         * files/paths for which unused exports will not be reported (e.g module entry points)
         */
        ignoreExports?: string[];
        /**
         * report modules without any exports
         */
        missingExports?: boolean;
        /**
         * report exports without any usage
         */
        unusedExports?: boolean;
        [k: string]: any;
      },
    ]
  >;
}
