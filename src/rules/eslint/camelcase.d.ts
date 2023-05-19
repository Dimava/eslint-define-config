import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CamelcaseRule {
  /**
   * Enforce camelcase naming convention.
   *
   * @see [camelcase](https://eslint.org/docs/rules/camelcase)
   */
  camelcase: Rule<
    [
      RuleLevel,
      {
        ignoreDestructuring?: boolean;
        ignoreImports?: boolean;
        ignoreGlobals?: boolean;
        properties?: 'always' | 'never';
        /**
         * @minItems 0
         */
        allow?: [] | [string];
      },
    ]
  >;
}
