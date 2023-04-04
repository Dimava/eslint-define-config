import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ObjectCurlySpacingRule = {
  /**
   * Enforce consistent spacing inside braces in `<template>`.
   *
   * @see [object-curly-spacing](https://eslint.vuejs.org/rules/object-curly-spacing.html)
   */
  'vue/object-curly-spacing': Rule<
    [
      RuleLevel,
      'always' | 'never',
      {
        arraysInObjects?: boolean;
        objectsInObjects?: boolean;
      },
    ]
  >;
};
