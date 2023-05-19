import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectPropertyNewlineRule {
  /**
   * Enforce placing object properties on separate lines in `<template>`.
   *
   * @see [object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)
   */
  'vue/object-property-newline': Rule<
    [
      RuleLevel,
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      },
    ]
  >;
}
