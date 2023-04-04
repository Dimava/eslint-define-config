import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessRenameRule = {
  /**
   * Disallow renaming import, export, and destructured assignments to the same name.
   *
   * @see [no-useless-rename](https://eslint.org/docs/rules/no-useless-rename)
   */
  'no-useless-rename': Rule<
    [
      RuleLevel,
      {
        ignoreDestructuring?: boolean;
        ignoreImport?: boolean;
        ignoreExport?: boolean;
      },
    ]
  >;
};
