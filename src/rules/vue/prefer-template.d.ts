import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferTemplateRule {
  /**
   * Require template literals instead of string concatenation in `<template>`.
   *
   * @see [prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)
   */
  'vue/prefer-template': Rule<[RuleLevel]>;
}
