import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface LoneExecutableDefinitionRule {
  /**
   * Require queries, mutations, subscriptions or fragments to be located in separate files.
   *
   * @see [lone-executable-definition](https://the-guild.dev/graphql/eslint/rules/lone-executable-definition)
   */
  '@graphql-eslint/lone-executable-definition': Rule<
    [
      RuleLevel,
      .../**
       * @maxItems 1
       */
      (| []
        | [
            {
              /**
               * Allow certain definitions to be placed alongside others.
               *
               * @minItems 1
               * @maxItems 3
               */
              ignore?:
                | ['fragment' | 'query' | 'mutation' | 'subscription']
                | [
                    'fragment' | 'query' | 'mutation' | 'subscription',
                    'fragment' | 'query' | 'mutation' | 'subscription',
                  ]
                | [
                    'fragment' | 'query' | 'mutation' | 'subscription',
                    'fragment' | 'query' | 'mutation' | 'subscription',
                    'fragment' | 'query' | 'mutation' | 'subscription',
                  ];
            },
          ]
      ),
    ]
  >;
}
