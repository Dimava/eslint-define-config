import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoWebpackLoaderSyntaxRule {
  /**
   * Forbid webpack loader syntax in imports.
   *
   * @see [no-webpack-loader-syntax](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-webpack-loader-syntax.md)
   */
  'import/no-webpack-loader-syntax': Rule<[RuleLevel]>;
}
