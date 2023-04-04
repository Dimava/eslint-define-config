import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUndefinedTypesRule = {
  /**
   * Checks that types in jsdoc comments are defined.
   *
   * @see [no-undefined-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-no-undefined-types)
   */
  'jsdoc/no-undefined-types': Rule<
    [
      RuleLevel,
      {
        definedTypes?: string[];
      },
    ]
  >;
};
