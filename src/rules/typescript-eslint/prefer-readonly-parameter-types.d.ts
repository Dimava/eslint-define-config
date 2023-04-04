import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferReadonlyParameterTypesRule = {
  /**
   * Require function parameters to be typed as `readonly` to prevent accidental mutation of inputs.
   *
   * @see [prefer-readonly-parameter-types](https://typescript-eslint.io/rules/prefer-readonly-parameter-types)
   */
  '@typescript-eslint/prefer-readonly-parameter-types': Rule<
    [
      RuleLevel,
      {
        checkParameterProperties?: boolean;
        ignoreInferredTypes?: boolean;
        treatMethodsAsReadonly?: boolean;
      },
    ]
  >;
};
