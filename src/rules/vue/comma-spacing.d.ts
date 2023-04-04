import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CommaSpacingRule = {
  /**
   * Enforce consistent spacing before and after commas in `<template>`.
   *
   * @see [comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)
   */
  'vue/comma-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
      },
    ]
  >;
};
