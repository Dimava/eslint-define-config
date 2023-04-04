import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type BraceStyleRule = {
  /**
   * Enforce consistent brace style for blocks in `<template>`.
   *
   * @see [brace-style](https://eslint.vuejs.org/rules/brace-style.html)
   */
  'vue/brace-style': Rule<
    [
      RuleLevel,
      '1tbs' | 'stroustrup' | 'allman',
      {
        allowSingleLine?: boolean;
      },
    ]
  >;
};
