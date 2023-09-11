import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxFilenameExtensionRule {
  /**
   * Disallow file extensions that may contain JSX.
   *
   * @see [jsx-filename-extension](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md)
   */
  'react/jsx-filename-extension': Rule<
    [
      RuleLevel,
      {
        allow?: 'always' | 'as-needed';
        extensions?: string[];
      },
    ]
  >;
}
