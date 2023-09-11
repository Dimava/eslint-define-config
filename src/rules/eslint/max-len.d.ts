import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxLenRule {
  /**
   * Enforce a maximum line length.
   *
   * @see [max-len](https://eslint.org/docs/latest/rules/max-len)
   */
  'max-len': Rule<
    [
      RuleLevel,
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      (
        | {
            code?: number;
            comments?: number;
            tabWidth?: number;
            ignorePattern?: string;
            ignoreComments?: boolean;
            ignoreStrings?: boolean;
            ignoreUrls?: boolean;
            ignoreTemplateLiterals?: boolean;
            ignoreRegExpLiterals?: boolean;
            ignoreTrailingComments?: boolean;
          }
        | number
      ),
      {
        code?: number;
        comments?: number;
        tabWidth?: number;
        ignorePattern?: string;
        ignoreComments?: boolean;
        ignoreStrings?: boolean;
        ignoreUrls?: boolean;
        ignoreTemplateLiterals?: boolean;
        ignoreRegExpLiterals?: boolean;
        ignoreTrailingComments?: boolean;
      },
    ]
  >;
}
