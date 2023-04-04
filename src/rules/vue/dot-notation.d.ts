import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type DotNotationRule = {
  /**
   * Enforce dot notation whenever possible in `<template>`.
   *
   * @see [dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)
   */
  'vue/dot-notation': Rule<
    [
      RuleLevel,
      {
        allowKeywords?: boolean;
        allowPattern?: string;
      },
    ]
  >;
};
