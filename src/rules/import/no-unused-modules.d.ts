import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type NoUnusedModulesOption = (
  | {
      [k: string]: any;
    }
  | {
      unusedExports: true;
      [k: string]: any;
    }
  | {
      missingExports: true;
      [k: string]: any;
    }
) & {
  /**
   * files/paths to be analyzed (only for unused exports)
   *
   * @minItems 1
   */
  src?: [string, ...string[]];
  /**
   * files/paths for which unused exports will not be reported (e.g module entry points)
   *
   * @minItems 1
   */
  ignoreExports?: [string, ...string[]];
  /**
   * report modules without any exports
   */
  missingExports?: boolean;
  /**
   * report exports without any usage
   */
  unusedExports?: boolean;
  [k: string]: any;
};

/**
 * Options.
 */
export type NoUnusedModulesOptions = [NoUnusedModulesOption?];

/**
 * Forbid modules without exports, or exports without matching import in another module.
 *
 * @see [no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unused-modules.md)
 */
export type NoUnusedModulesRuleConfig = RuleConfig<NoUnusedModulesOptions>;

/**
 * Forbid modules without exports, or exports without matching import in another module.
 *
 * @see [no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unused-modules.md)
 */
export interface NoUnusedModulesRule {
  /**
   * Forbid modules without exports, or exports without matching import in another module.
   *
   * @see [no-unused-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-unused-modules.md)
   */
  'import/no-unused-modules': NoUnusedModulesRuleConfig;
}
