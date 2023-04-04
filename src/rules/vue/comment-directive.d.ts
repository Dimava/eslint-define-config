import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CommentDirectiveRule = {
  /**
   * Support comment-directives in `<template>`.
   *
   * @see [comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)
   */
  'vue/comment-directive': Rule<
    [
      RuleLevel,
      {
        reportUnusedDisableDirectives?: boolean;
      },
    ]
  >;
};
