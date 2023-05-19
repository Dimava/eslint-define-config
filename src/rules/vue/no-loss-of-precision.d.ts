import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLossOfPrecisionRule {
  /**
   * Disallow literal numbers that lose precision in `<template>`.
   *
   * @see [no-loss-of-precision](https://eslint.vuejs.org/rules/no-loss-of-precision.html)
   */
  'vue/no-loss-of-precision': Rule<[RuleLevel]>;
}
