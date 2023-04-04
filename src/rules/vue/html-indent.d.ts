import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type HtmlIndentRule = {
  /**
   * Enforce consistent indentation in `<template>`.
   *
   * @see [html-indent](https://eslint.vuejs.org/rules/html-indent.html)
   */
  'vue/html-indent': Rule<
    [
      RuleLevel,
      number | 'tab',
      {
        attribute?: number;
        baseIndent?: number;
        closeBracket?:
          | number
          | {
              startTag?: number;
              endTag?: number;
              selfClosingTag?: number;
            };
        switchCase?: number;
        alignAttributesVertically?: boolean;
        ignores?: (string & {
          [k: string]: any;
        } & {
          [k: string]: any;
        })[];
      },
    ]
  >;
};
