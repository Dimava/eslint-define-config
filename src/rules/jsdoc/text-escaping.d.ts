import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type TextEscapingRule = {
  /**
   *
   * @see [text-escaping](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-text-escaping)
   */
  'jsdoc/text-escaping': Rule<
    [
      RuleLevel,
      {
        escapeHTML?: boolean;
        escapeMarkdown?: boolean;
        [k: string]: any;
      },
    ]
  >;
};
