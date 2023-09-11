import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoVForTemplateKeyRule {
  /**
   * Disallow `key` attribute on `<template v-for>`.
   *
   * @see [no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)
   */
  'vue/no-v-for-template-key': Rule<[RuleLevel]>;
}
