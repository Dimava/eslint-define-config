import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface SelectionSetDepthRule {
  /**
   * Limit the complexity of the GraphQL operations solely by their depth. Based on [graphql-depth-limit](https://npmjs.com/package/graphql-depth-limit).
   *
   * @see [selection-set-depth](https://the-guild.dev/graphql/eslint/rules/selection-set-depth)
   */
  '@graphql-eslint/selection-set-depth': Rule<
    [
      RuleLevel,
      .../**
       * @minItems 1
       * @maxItems 1
       */
      [
        {
          maxDepth: number;
          /**
           * @minItems 1
           */
          ignore?: [string, ...string[]];
        },
      ],
    ]
  >;
}
