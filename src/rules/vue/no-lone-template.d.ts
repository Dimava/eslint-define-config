import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoLoneTemplateRule = {
  /**
   * Disallow unnecessary `<template>`.
   *
   * @see [no-lone-template](https://eslint.vuejs.org/rules/no-lone-template.html)
   */
  'vue/no-lone-template': Rule<
    [
      RuleLevel,
      {
        ignoreAccessible?: boolean;
      },
    ]
  >;
};
