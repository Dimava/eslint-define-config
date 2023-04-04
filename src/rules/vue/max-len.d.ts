import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MaxLenRule = {
  /**
   * Enforce a maximum line length in `.vue` files.
   *
   * @see [max-len](https://eslint.vuejs.org/rules/max-len.html)
   */
  'vue/max-len': Rule<
    [
      RuleLevel,
      (
        | {
            code?: number;
            template?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreTrailingComments?: boolean;
            ignoreUrls?: boolean;
            ignoreStrings?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreHTMLAttributeValues?: boolean;
            ignoreHTMLTextContents?: boolean;
          }
        | number
      ),
      (
        | {
            code?: number;
            template?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreTrailingComments?: boolean;
            ignoreUrls?: boolean;
            ignoreStrings?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreHTMLAttributeValues?: boolean;
            ignoreHTMLTextContents?: boolean;
          }
        | number
      ),
      {
        code?: number;
        template?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreTrailingComments?: boolean;
        ignoreUrls?: boolean;
        ignoreStrings?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreHTMLAttributeValues?: boolean;
        ignoreHTMLTextContents?: boolean;
      },
    ]
  >;
};
