import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DotLocationRule {
  /**
   * Enforce consistent newlines before and after dots in `<template>`.
   *
   * @see [dot-location](https://eslint.vuejs.org/rules/dot-location.html)
   */
  'vue/dot-location': Rule<[RuleLevel, 'object' | 'property']>;
}
