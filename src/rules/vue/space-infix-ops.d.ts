import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type SpaceInfixOpsRule = {
  /**
   * Require spacing around infix operators in `<template>`.
   *
   * @see [space-infix-ops](https://eslint.vuejs.org/rules/space-infix-ops.html)
   */
  'vue/space-infix-ops': Rule<
    [
      RuleLevel,
      {
        int32Hint?: boolean;
      },
    ]
  >;
};
