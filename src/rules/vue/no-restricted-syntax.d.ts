import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRestrictedSyntaxRule = {
  /**
   * Disallow specified syntax in `<template>`.
   *
   * @see [no-restricted-syntax](https://eslint.vuejs.org/rules/no-restricted-syntax.html)
   */
  'vue/no-restricted-syntax': Rule<
    [
      RuleLevel,
      /**
       * @minItems 0
       */
      (
        | string
        | {
            selector: string;
            message?: string;
          }
      )[],
    ]
  >;
};
