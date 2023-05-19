import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyPatternRule {
  /**
   * Disallow empty destructuring patterns in `<template>`.
   *
   * @see [no-empty-pattern](https://eslint.vuejs.org/rules/no-empty-pattern.html)
   */
  'vue/no-empty-pattern': Rule<[RuleLevel]>;
}
