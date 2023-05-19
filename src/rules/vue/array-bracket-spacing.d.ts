import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrayBracketSpacingRule {
  /**
   * Enforce consistent spacing inside array brackets in `<template>`.
   *
   * @see [array-bracket-spacing](https://eslint.vuejs.org/rules/array-bracket-spacing.html)
   */
  'vue/array-bracket-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        singleValue?: boolean;
        objectsInArrays?: boolean;
        arraysInArrays?: boolean;
      },
    ]
  >;
}
