import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface EqeqeqRule {
  /**
   * Require the use of `===` and `!==` in `<template>`.
   *
   * @see [eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)
   */
  'vue/eqeqeq': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always']
        | [
            'always',
            {
              null?: 'always' | 'never' | 'ignore';
            },
          ]
        | []
        | ['smart' | 'allow-null']
      ),
    ]
  >;
}
