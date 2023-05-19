import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectCurlyNewlineRule {
  /**
   * Enforce consistent line breaks after opening and before closing braces in `<template>`.
   *
   * @see [object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)
   */
  'vue/object-curly-newline': Rule<
    [
      RuleLevel,
      (
        | (
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              }
          )
        | {
            ObjectExpression?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ObjectPattern?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ImportDeclaration?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ExportDeclaration?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
          }
      ),
    ]
  >;
}
