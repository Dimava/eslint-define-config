import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CamelcaseRule = {
  /**
   * Enforce camelcase naming convention in `<template>`.
   *
   * @see [camelcase](https://eslint.vuejs.org/rules/camelcase.html)
   */
  'vue/camelcase': Rule<
    [
      RuleLevel,
      {
        ignoreDestructuring?: boolean;
        ignoreImports?: boolean;
        ignoreGlobals?: boolean;
        properties?: 'always' | 'never';
        /**
         * @minItems 0
         */
        allow?: [] | [string];
      },
    ]
  >;
};
