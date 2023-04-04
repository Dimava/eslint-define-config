import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoRootTypeRule = {
  /**
   * Disallow using root types `mutation` and/or `subscription`.
   *
   * @see [no-root-type](https://the-guild.dev/graphql/eslint/rules/no-root-type)
   */
  '@graphql-eslint/no-root-type': Rule<
    [
      RuleLevel,
      /**
       * @minItems 1
       * @maxItems 1
       */
      [
        {
          /**
           * @minItems 1
           */
          disallow: [
            'mutation' | 'subscription',
            ...('mutation' | 'subscription')[],
          ];
        },
      ],
    ]
  >;
};
