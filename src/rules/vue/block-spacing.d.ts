import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type BlockSpacingRule = {
  /**
   * Disallow or enforce spaces inside of blocks after opening block and before closing block in `<template>`.
   *
   * @see [block-spacing](https://eslint.vuejs.org/rules/block-spacing.html)
   */
  'vue/block-spacing': Rule<[RuleLevel, 'always' | 'never']>;
};
