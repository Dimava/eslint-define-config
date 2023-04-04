import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoIrregularWhitespaceRule = {
  /**
   * Disallow irregular whitespace in `.vue` files.
   *
   * @see [no-irregular-whitespace](https://eslint.vuejs.org/rules/no-irregular-whitespace.html)
   */
  'vue/no-irregular-whitespace': Rule<
    [
      RuleLevel,
      {
        skipComments?: boolean;
        skipStrings?: boolean;
        skipTemplates?: boolean;
        skipRegExps?: boolean;
        skipHTMLAttributeValues?: boolean;
        skipHTMLTextContents?: boolean;
      },
    ]
  >;
};
