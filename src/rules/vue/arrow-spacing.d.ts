import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrowSpacingRule {
  /**
   * Enforce consistent spacing before and after the arrow in arrow functions in `<template>`.
   *
   * @see [arrow-spacing](https://eslint.vuejs.org/rules/arrow-spacing.html)
   */
  'vue/arrow-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
}
