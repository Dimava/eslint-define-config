import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type TemplateIndentRule = {
  /**
   * Fix whitespace-insensitive template indentation.
   *
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/template-indent.md)
   */
  'unicorn/template-indent': Rule<
    [
      RuleLevel,
      {
        indent?: string | number;
        tags?: string[];
        functions?: string[];
        selectors?: string[];
        comments?: string[];
      },
    ]
  >;
};
