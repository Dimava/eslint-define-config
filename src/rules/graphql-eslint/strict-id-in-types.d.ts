import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type StrictIdInTypesRule = {
  /**
   * Requires output types to have one unique identifier unless they do not have a logical one. Exceptions can be used to ignore output types that do not have unique identifiers.
   *
   * @see [strict-id-in-types](https://the-guild.dev/graphql/eslint/rules/strict-id-in-types)
   */
  '@graphql-eslint/strict-id-in-types': Rule<
    [
      RuleLevel,
      /**
       * @maxItems 1
       */
      (
        | []
        | [
            {
              /**
               * @minItems 1
               */
              acceptedIdNames?: [string, ...string[]];
              /**
               * @minItems 1
               */
              acceptedIdTypes?: [string, ...string[]];
              exceptions?: {
                /**
                 * This is used to exclude types with names that match one of the specified values.
                 *
                 * @minItems 1
                 */
                types?: [string, ...string[]];
                /**
                 * This is used to exclude types with names with suffixes that match one of the specified values.
                 *
                 * @minItems 1
                 */
                suffixes?: [string, ...string[]];
              };
            },
          ]
      ),
    ]
  >;
};
