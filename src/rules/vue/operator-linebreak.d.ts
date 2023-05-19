import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface OperatorLinebreakRule {
  /**
   * Enforce consistent linebreak style for operators in `<template>`.
   *
   * @see [operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)
   */
  'vue/operator-linebreak': Rule<
    [
      RuleLevel,
      'after' | 'before' | 'none' | null,
      {
        overrides?: {
          [k: string]: 'after' | 'before' | 'none' | 'ignore';
        };
      },
    ]
  >;
}
