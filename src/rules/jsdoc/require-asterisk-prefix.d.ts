import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireAsteriskPrefixRule {
  /**
   * Requires that each JSDoc line starts with an `*`.
   *
   * @see [require-asterisk-prefix](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-asterisk-prefix.md#repos-sticky-header)
   */
  'jsdoc/require-asterisk-prefix': Rule<
    [
      RuleLevel,
      'always' | 'never' | 'any',
      {
        tags?: {
          always?: string[];
          any?: string[];
          never?: string[];
          [k: string]: any;
        };
      },
    ]
  >;
}
