import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FuncCallSpacingRule = {
  /**
   * Require or disallow spacing between function identifiers and their invocations in `<template>`.
   *
   * @see [func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)
   */
  'vue/func-call-spacing': Rule<
    [
      RuleLevel,
      (
        | []
        | ['never']
        | []
        | ['always']
        | [
            'always',
            {
              allowNewlines?: boolean;
            },
          ]
      ),
    ]
  >;
};
