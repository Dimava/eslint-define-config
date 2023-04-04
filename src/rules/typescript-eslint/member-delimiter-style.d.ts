import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type MemberDelimiterStyleRule = {
  /**
   * Require a specific member delimiter style for interfaces and type literals.
   *
   * @see [member-delimiter-style](https://typescript-eslint.io/rules/member-delimiter-style)
   */
  '@typescript-eslint/member-delimiter-style': Rule<
    [
      RuleLevel,
      {
        multiline?: {
          delimiter?: 'none' | 'semi' | 'comma';
          requireLast?: boolean;
        };
        singleline?: {
          delimiter?: 'semi' | 'comma';
          requireLast?: boolean;
        };
        overrides?: {
          interface?: {
            multiline?: {
              delimiter?: 'none' | 'semi' | 'comma';
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: 'semi' | 'comma';
              requireLast?: boolean;
            };
          };
          typeLiteral?: {
            multiline?: {
              delimiter?: 'none' | 'semi' | 'comma';
              requireLast?: boolean;
            };
            singleline?: {
              delimiter?: 'semi' | 'comma';
              requireLast?: boolean;
            };
          };
        };
        multilineDetection?: 'brackets' | 'last-member';
      },
    ]
  >;
};
