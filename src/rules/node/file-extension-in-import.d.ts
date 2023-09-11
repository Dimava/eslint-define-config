import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FileExtensionInImportRule {
  /**
   * Enforce the style of file extensions in `import` declarations.
   *
   * @see [file-extension-in-import](https://github.com/mysticatea/eslint-plugin-node/blob/v11.1.0/docs/rules/file-extension-in-import.md)
   */
  'node/file-extension-in-import': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        tryExtensions?: string[];
        [k: string]: 'always' | 'never';
      },
    ]
  >;
}
