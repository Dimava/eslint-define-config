import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUselessTemplateAttributesRule {
  /**
   * Disallow useless attribute on `<template>`.
   *
   * @see [no-useless-template-attributes](https://eslint.vuejs.org/rules/no-useless-template-attributes.html)
   */
  'vue/no-useless-template-attributes': Rule<[RuleLevel]>;
}
