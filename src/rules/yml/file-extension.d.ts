import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FileExtensionRule {
  /**
   * Enforce YAML file extension.
   *
   * @see [file-extension](https://ota-meshi.github.io/eslint-plugin-yml/rules/file-extension.html)
   */
  'yml/file-extension': Rule<
    [
      RuleLevel,
      {
        extension?: 'yaml' | 'yml';
        caseSensitive?: boolean;
      },
    ]
  >;
}
