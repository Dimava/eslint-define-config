import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface KeyFormatStyleRule {
  /**
   * Enforce specific casing for localization keys.
   *
   * @see [key-format-style](https://eslint-plugin-vue-i18n.intlify.dev/rules/key-format-style.html)
   */
  '@intlify/vue-i18n/key-format-style': Rule<
    [
      RuleLevel,
      'camelCase' | 'kebab-case' | 'snake_case' | 'SCREAMING_SNAKE_CASE',
      {
        allowArray?: boolean;
        splitByDots?: boolean;
      },
    ]
  >;
}
