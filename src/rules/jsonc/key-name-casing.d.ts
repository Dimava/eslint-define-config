import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type KeyNameCasingRule = {
  /**
   * Enforce naming convention to property key names.
   *
   * @see [key-name-casing](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/key-name-casing.html)
   */
  'jsonc/key-name-casing': Rule<
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
};
