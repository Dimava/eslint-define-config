import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface KeyNameCasingRule {
  /**
   * Enforce naming convention to key names.
   *
   * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-yml/rules/key-name-casing.html)
   */
  'yml/key-name-casing': Rule<
    [
      RuleLevel,
      {
        camelCase?: boolean;
        PascalCase?: boolean;
        SCREAMING_SNAKE_CASE?: boolean;
        'kebab-case'?: boolean;
        snake_case?: boolean;
        ignores?: string[];
      },
    ]
  >;
}
