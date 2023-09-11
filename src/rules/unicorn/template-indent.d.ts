import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TemplateIndentRule {
  /**
   * Fix whitespace-insensitive template indentation.
   *
   * @see [template-indent](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/template-indent.md)
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
}
