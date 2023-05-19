import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoNodejsModulesRule {
  /**
   * Forbid Node.js builtin modules.
   *
   * @see [no-nodejs-modules](https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-nodejs-modules.md)
   */
  'import/no-nodejs-modules': Rule<
    [
      RuleLevel,
      {
        allow?: string[];
      },
    ]
  >;
}
