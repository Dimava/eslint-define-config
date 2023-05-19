import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoEmptyComponentBlockRule {
  /**
   * Disallow the `<template>` `<script>` `<style>` block to be empty.
   *
   * @see [no-empty-component-block](https://eslint.vuejs.org/rules/no-empty-component-block.html)
   */
  'vue/no-empty-component-block': Rule<[RuleLevel]>;
}
