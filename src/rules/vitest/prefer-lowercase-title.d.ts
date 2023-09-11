import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferLowercaseTitleRule {
  /**
   * Enforce lowercase titles.
   *
   * @see [prefer-lowercase-title](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-lowercase-title.md)
   */
  'vitest/prefer-lowercase-title': Rule<
    [
      RuleLevel,
      {
        ignore?: ('describe' | 'test' | 'it')[];
        allowedPrefixes?: string[];
        ignoreTopLevelDescribe?: boolean;
        lowercaseFirstCharacterOnly?: boolean;
      },
    ]
  >;
}
