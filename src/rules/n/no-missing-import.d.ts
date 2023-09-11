import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMissingImportRule {
  /**
   * Disallow `import` declarations which import non-existence modules.
   *
   * @see [no-missing-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/no-missing-import.md)
   */
  'n/no-missing-import': Rule<
    [
      RuleLevel,
      {
        allowModules?: string[];
        resolvePaths?: string[];
      },
    ]
  >;
}
