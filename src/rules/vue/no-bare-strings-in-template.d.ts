import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoBareStringsInTemplateRule = {
  /**
   * Disallow the use of bare strings in `<template>`.
   *
   * @see [no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template.html)
   */
  'vue/no-bare-strings-in-template': Rule<
    [
      RuleLevel,
      {
        allowlist?: string[];
        attributes?: {
          /**
           */
          [k: string]: string[];
        };
        directives?: string[];
      },
    ]
  >;
};
