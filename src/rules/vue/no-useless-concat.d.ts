import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUselessConcatRule = {
  /**
   * Disallow unnecessary concatenation of literals or template literals in `<template>`.
   *
   * @see [no-useless-concat](https://eslint.vuejs.org/rules/no-useless-concat.html)
   */
  'vue/no-useless-concat': Rule<[RuleLevel]>;
};
