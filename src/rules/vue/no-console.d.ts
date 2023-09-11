import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConsoleRule {
  /**
   * Disallow the use of `console` in `<template>`.
   *
   * @see [no-console](https://eslint.vuejs.org/rules/no-console.html)
   */
  'vue/no-console': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        allow?: [string, ...string[]];
      },
    ]
  >;
}
