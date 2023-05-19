import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedPropertiesRule {
  /**
   * Disallow unused properties.
   *
   * @see [no-unused-properties](https://eslint.vuejs.org/rules/no-unused-properties.html)
   */
  'vue/no-unused-properties': Rule<
    [
      RuleLevel,
      {
        groups?: (
          | 'props'
          | 'data'
          | 'asyncData'
          | 'computed'
          | 'methods'
          | 'setup'
        )[];
        deepData?: boolean;
        ignorePublicMembers?: boolean;
        unreferencedOptions?: (
          | 'unknownMemberAsUnreferenced'
          | 'returnAsUnreferenced'
        )[];
      },
    ]
  >;
}
