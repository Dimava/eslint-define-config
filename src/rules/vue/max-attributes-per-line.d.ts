import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxAttributesPerLineRule {
  /**
   * Enforce the maximum number of attributes per line.
   *
   * @see [max-attributes-per-line](https://eslint.vuejs.org/rules/max-attributes-per-line.html)
   */
  'vue/max-attributes-per-line': Rule<
    [
      RuleLevel,
      {
        singleline?:
          | number
          | {
              max?: number;
            };
        multiline?:
          | number
          | {
              max?: number;
            };
      },
    ]
  >;
}
