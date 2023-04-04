import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoVForTemplateKeyOnChildRule = {
  /**
   * Disallow key of `<template v-for>` placed on child elements.
   *
   * @see [no-v-for-template-key-on-child](https://eslint.vuejs.org/rules/no-v-for-template-key-on-child.html)
   */
  'vue/no-v-for-template-key-on-child': Rule<[RuleLevel]>;
};
