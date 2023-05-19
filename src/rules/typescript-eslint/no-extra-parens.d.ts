import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoExtraParensRule {
  /**
   * Disallow unnecessary parentheses.
   *
   * @see [no-extra-parens](https://typescript-eslint.io/rules/no-extra-parens)
   */
  '@typescript-eslint/no-extra-parens': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['functions']
        | []
        | ['all']
        | [
            'all',
            {
              conditionalAssign?: boolean;
              nestedBinaryExpressions?: boolean;
              returnAssign?: boolean;
              ignoreJSX?: 'none' | 'all' | 'single-line' | 'multi-line';
              enforceForArrowConditionals?: boolean;
              enforceForSequenceExpressions?: boolean;
              enforceForNewInMemberExpressions?: boolean;
              enforceForFunctionPrototypeMethods?: boolean;
              allowParensAfterCommentPattern?: string;
            },
          ]
      ),
    ]
  >;
}
