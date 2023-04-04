import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoInferrableTypesRule = {
  /**
   * Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   *
   * @see [no-inferrable-types](https://typescript-eslint.io/rules/no-inferrable-types)
   */
  '@typescript-eslint/no-inferrable-types': Rule<
    [
      RuleLevel,
      {
        ignoreParameters?: boolean;
        ignoreProperties?: boolean;
      },
    ]
  >;
};
