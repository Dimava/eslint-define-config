import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUndefComponentsRule {
  /**
   * Disallow use of undefined components in `<template>`.
   *
   * @see [no-undef-components](https://eslint.vuejs.org/rules/no-undef-components.html)
   */
  'vue/no-undef-components': Rule<
    [
      RuleLevel,
      {
        ignorePatterns?: any[];
      },
    ]
  >;
}
