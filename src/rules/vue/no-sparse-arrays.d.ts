import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoSparseArraysRule = {
  /**
   * Disallow sparse arrays in `<template>`.
   *
   * @see [no-sparse-arrays](https://eslint.vuejs.org/rules/no-sparse-arrays.html)
   */
  'vue/no-sparse-arrays': Rule<[RuleLevel]>;
};
