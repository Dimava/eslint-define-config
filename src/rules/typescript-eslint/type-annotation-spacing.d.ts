import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface TypeAnnotationSpacingRule {
  /**
   * Require consistent spacing around type annotations.
   *
   * @see [type-annotation-spacing](https://typescript-eslint.io/rules/type-annotation-spacing)
   */
  '@typescript-eslint/type-annotation-spacing': Rule<
    [
      RuleLevel,
      {
        before?: boolean;
        after?: boolean;
        overrides?: {
          colon?: {
            before?: boolean;
            after?: boolean;
          };
          arrow?: {
            before?: boolean;
            after?: boolean;
          };
          variable?: {
            before?: boolean;
            after?: boolean;
          };
          parameter?: {
            before?: boolean;
            after?: boolean;
          };
          property?: {
            before?: boolean;
            after?: boolean;
          };
          returnType?: {
            before?: boolean;
            after?: boolean;
          };
        };
      },
    ]
  >;
}
