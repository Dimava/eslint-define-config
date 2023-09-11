import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoIrregularWhitespaceRule {
  /**
   * Disallow irregular whitespace.
   *
   * @see [no-irregular-whitespace](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/no-irregular-whitespace.html)
   */
  'jsonc/no-irregular-whitespace': Rule<
    [
      RuleLevel,
      {
        skipComments?: boolean;
        skipStrings?: boolean;
        skipTemplates?: boolean;
        skipRegExps?: boolean;
        skipJSXText?: boolean;
      },
    ]
  >;
}
