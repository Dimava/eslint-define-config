import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SpaceUnaryOpsRule {
  /**
   * Enforce consistent spacing before or after unary operators in `<template>`.
   *
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  'vue/space-unary-ops': Rule<
    [
      RuleLevel,
      {
        words?: boolean;
        nonwords?: boolean;
        overrides?: {
          [k: string]: boolean;
        };
      },
    ]
  >;
}
