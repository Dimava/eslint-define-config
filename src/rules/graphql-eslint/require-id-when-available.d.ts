import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireIdWhenAvailableRule {
  /**
   * Enforce selecting specific fields when they are available on the GraphQL type.
   *
   * @see [require-id-when-available](https://the-guild.dev/graphql/eslint/rules/require-id-when-available)
   */
  '@graphql-eslint/require-id-when-available': Rule<
    [
      RuleLevel,
      .../**
       * @maxItems 1
       */
      (| []
        | [
            {
              fieldName?: AsString | AsArray;
            },
          ]
      ),
    ]
  >;
}
type AsString = string;
/**
 * @minItems 1
 */
type AsArray = [string, ...string[]];
