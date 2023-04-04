import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoTemplateKeyRule = {
  /**
   * Disallow `key` attribute on `<template>`.
   *
   * @see [no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)
   */
  'vue/no-template-key': Rule<[RuleLevel]>;
};
