import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface KeySpacingRule {
  /**
   * Enforce consistent spacing between keys and values in object literal properties in `<template>`.
   *
   * @see [key-spacing](https://eslint.vuejs.org/rules/key-spacing.html)
   */
  'vue/key-spacing': Rule<
    [
      RuleLevel,
      (
        | {
            align?:
              | ('colon' | 'value')
              | {
                  mode?: 'strict' | 'minimum';
                  on?: 'colon' | 'value';
                  beforeColon?: boolean;
                  afterColon?: boolean;
                };
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          }
        | {
            singleLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              align?:
                | ('colon' | 'value')
                | {
                    mode?: 'strict' | 'minimum';
                    on?: 'colon' | 'value';
                    beforeColon?: boolean;
                    afterColon?: boolean;
                  };
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
        | {
            singleLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            align?: {
              mode?: 'strict' | 'minimum';
              on?: 'colon' | 'value';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
      ),
    ]
  >;
}
