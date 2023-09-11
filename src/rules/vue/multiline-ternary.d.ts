import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MultilineTernaryRule {
  /**
   * Enforce newlines between operands of ternary expressions in `<template>`.
   *
   * @see [multiline-ternary](https://eslint.vuejs.org/rules/multiline-ternary.html)
   */
  'vue/multiline-ternary': Rule<
    [RuleLevel, 'always' | 'always-multiline' | 'never']
  >;
}
