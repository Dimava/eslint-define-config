import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type KnownDirectivesRule = {
  /**
 * A GraphQL document is only valid if all `@directive`s are known by the schema and legally positioned.
> This rule is a wrapper around a `graphql-js` validation function.
 *  
 * @see [known-directives](https://the-guild.dev/graphql/eslint/rules/known-directives)
 */
  '@graphql-eslint/known-directives': Rule<
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
              ignoreClientDirectives: [string, ...string[]];
            },
          ]
      ),
    ]
  >;
};
