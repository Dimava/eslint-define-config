import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses in `<template>`.
   *
   * @see [no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)
   */
  'vue/no-extra-parens': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['functions']
        | []
        | ['all']
        | [
            'all',
            {
              conditionalAssign?: boolean;
              nestedBinaryExpressions?: boolean;
              returnAssign?: boolean;
              ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
              enforceForArrowConditionals?: boolean;
              enforceForSequenceExpressions?: boolean;
              enforceForNewInMemberExpressions?: boolean;
              enforceForFunctionPrototypeMethods?: boolean;
              allowParensAfterCommentPattern?: string;
            },
          ]
      ),
    ]
  >;
}
