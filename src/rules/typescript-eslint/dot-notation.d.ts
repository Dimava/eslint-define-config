import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type DotNotationRule = {
  /**
   * Enforce dot notation whenever possible.
   *
   * @see [dot-notation](https://typescript-eslint.io/rules/dot-notation)
   */
  '@typescript-eslint/dot-notation': Rule<
    [
      RuleLevel,
      {
        allowKeywords?: boolean;
        allowPattern?: string;
        allowPrivateClassPropertyAccess?: boolean;
        allowProtectedClassPropertyAccess?: boolean;
        allowIndexSignaturePropertyAccess?: boolean;
      },
    ]
  >;
};
