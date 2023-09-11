import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoParameterPropertiesRule {
  /**
   * Disallow the use of parameter properties in class constructors.
   *
   * @deprecated
   *
   * @see [no-parameter-properties](https://typescript-eslint.io/rules/no-parameter-properties)
   */
  '@typescript-eslint/no-parameter-properties': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        allows?: [
          (
            | 'readonly'
            | 'private'
            | 'protected'
            | 'public'
            | 'private readonly'
            | 'protected readonly'
            | 'public readonly'
          ),
          ...(
            | 'readonly'
            | 'private'
            | 'protected'
            | 'public'
            | 'private readonly'
            | 'protected readonly'
            | 'public readonly'
          )[],
        ];
      },
    ]
  >;
}
