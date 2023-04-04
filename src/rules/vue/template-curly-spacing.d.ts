import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type TemplateCurlySpacingRule = {
  /**
   * Require or disallow spacing around embedded expressions of template strings in `<template>`.
   *
   * @see [template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)
   */
  'vue/template-curly-spacing': Rule<[RuleLevel, 'always' | 'never']>;
};
