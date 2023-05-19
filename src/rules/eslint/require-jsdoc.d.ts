import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireJsdocRule {
  /**
   * Require JSDoc comments.
   *
   * @deprecated
   *
   * @see [require-jsdoc](https://eslint.org/docs/rules/require-jsdoc)
   */
  'require-jsdoc': Rule<
    [
      RuleLevel,
      {
        require?: {
          ClassDeclaration?: boolean;
          MethodDefinition?: boolean;
          FunctionDeclaration?: boolean;
          ArrowFunctionExpression?: boolean;
          FunctionExpression?: boolean;
        };
      },
    ]
  >;
}
