import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMissingImportRule = {
  /**
   * Disallow `import` declarations which import non-existence modules.
   *
   * @see [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/no-missing-import.md)
   */
  'node/no-missing-import': Rule<
    [
      RuleLevel,
      {
        allowModules?: string[];
        tryExtensions?: string[];
        resolvePaths?: string[];
      },
    ]
  >;
};
