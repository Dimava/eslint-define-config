import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FileExtensionInImportRule = {
  /**
   * Enforce the style of file extensions in `import` declarations.
   *
   * @see [file-extension-in-import](https://github.com/weiran-zsd/eslint-plugin-node/blob/HEAD/docs/rules/file-extension-in-import.md)
   */
  'n/file-extension-in-import': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        [k: string]: 'always' | 'never';
      },
    ]
  >;
};
