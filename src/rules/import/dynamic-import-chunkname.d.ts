import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DynamicImportChunknameRule {
  /**
   * Enforce a leading comment with the webpackChunkName for dynamic imports.
   *
   * @see [dynamic-import-chunkname](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/dynamic-import-chunkname.md)
   */
  'import/dynamic-import-chunkname': Rule<
    [
      RuleLevel,
      {
        importFunctions?: string[];
        webpackChunknameFormat?: string;
        [k: string]: any;
      },
    ]
  >;
}
