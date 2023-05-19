import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireDeprecationDateRule {
  /**
   * Require deletion date on `@deprecated` directive. Suggest removing deprecated things after deprecated date.
   *
   * @see [require-deprecation-date](https://the-guild.dev/graphql/eslint/rules/require-deprecation-date)
   */
  '@graphql-eslint/require-deprecation-date': Rule<
    [
      RuleLevel,
      .../**
       * @maxItems 1
       */
      (| []
        | [
            {
              argumentName?: string;
            },
          ]
      ),
    ]
  >;
}
