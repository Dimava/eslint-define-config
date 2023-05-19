import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ScriptSetupUsesVarsRule {
  /**
   * Prevent `<script setup>` variables used in `<template>` to be marked as unused.
   *
   * @deprecated
   *
   * @see [script-setup-uses-vars](https://eslint.vuejs.org/rules/script-setup-uses-vars.html)
   */
  'vue/script-setup-uses-vars': Rule<[RuleLevel]>;
}
