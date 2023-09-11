import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ParameterPropertiesRule {
  /**
   * Require or disallow parameter properties in class constructors.
   *
   * @see [parameter-properties](https://typescript-eslint.io/rules/parameter-properties)
   */
  '@typescript-eslint/parameter-properties': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        allow?: [
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
        prefer?: 'class-property' | 'parameter-property';
      },
    ]
  >;
}
