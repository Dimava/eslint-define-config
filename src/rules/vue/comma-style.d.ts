import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CommaStyleRule {
  /**
   * Enforce consistent comma style in `<template>`.
   *
   * @see [comma-style](https://eslint.vuejs.org/rules/comma-style.html)
   */
  'vue/comma-style': Rule<
    [
      RuleLevel,
      'first' | 'last',
      {
        exceptions?: {
          [k: string]: boolean;
        };
      },
    ]
  >;
}
