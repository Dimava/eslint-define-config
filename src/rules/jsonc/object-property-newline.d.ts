import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ObjectPropertyNewlineRule = {
  /**
   * Enforce placing object properties on separate lines.
   *
   * @see [object-property-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-property-newline.html)
   */
  'jsonc/object-property-newline': Rule<
    [
      RuleLevel,
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      },
    ]
  >;
};
