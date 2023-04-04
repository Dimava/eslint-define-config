import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceInParensRule = {
  /**
   * Enforce consistent spacing inside parentheses in `<template>`.
   *
   * @see [space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)
   */
  'vue/space-in-parens': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        exceptions?: ('{}' | '[]' | '()' | 'empty')[];
      },
    ]
  >;
};
