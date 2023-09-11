import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectPropertyNewlineRule {
  /**
   * Enforce placing object properties on separate lines.
   *
   * @see [object-property-newline](https://eslint.org/docs/latest/rules/object-property-newline)
   */
  'object-property-newline': Rule<
    [
      RuleLevel,
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      },
    ]
  >;
}
