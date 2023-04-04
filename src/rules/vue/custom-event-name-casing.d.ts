import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type CustomEventNameCasingRule = {
  /**
   * Enforce specific casing for custom event name.
   *
   * @see [custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)
   */
  'vue/custom-event-name-casing': Rule<
    [
      RuleLevel,
      (
        | []
        | ['kebab-case' | 'camelCase']
        | [
            'kebab-case' | 'camelCase',
            {
              ignores?: string[];
            },
          ]
        | []
        | [
            {
              ignores?: string[];
            },
          ]
      ),
    ]
  >;
};
