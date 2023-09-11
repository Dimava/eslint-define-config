import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface DescriptionStyleRule {
  /**
   * Require all comments to follow the same style (either block or inline).
   *
   * @see [description-style](https://the-guild.dev/graphql/eslint/rules/description-style)
   */
  '@graphql-eslint/description-style': Rule<
    [
      RuleLevel,
      .../**
       * @maxItems 1
       */
      (| []
        | [
            {
              style?: 'block' | 'inline';
            },
          ]
      ),
    ]
  >;
}
