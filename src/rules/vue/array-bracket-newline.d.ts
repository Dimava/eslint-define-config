import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ArrayBracketNewlineRule = {
  /**
   * Enforce linebreaks after opening and before closing array brackets in `<template>`.
   *
   * @see [array-bracket-newline](https://eslint.vuejs.org/rules/array-bracket-newline.html)
   */
  'vue/array-bracket-newline': Rule<
    [
      RuleLevel,
      (
        | ('always' | 'never' | 'consistent')
        | {
            multiline?: boolean;
            minItems?: number | null;
          }
      ),
    ]
  >;
};
