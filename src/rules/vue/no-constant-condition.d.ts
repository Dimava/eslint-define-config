import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoConstantConditionRule = {
  /**
   * Disallow constant expressions in conditions in `<template>`.
   *
   * @see [no-constant-condition](https://eslint.vuejs.org/rules/no-constant-condition.html)
   */
  'vue/no-constant-condition': Rule<
    [
      RuleLevel,
      {
        checkLoops?: boolean;
      },
    ]
  >;
};
