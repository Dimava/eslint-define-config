import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireJsdocRule {
  /**
   * Require JSDoc comments.
   *
   * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/require-jsdoc.md#repos-sticky-header)
   */
  'jsdoc/require-jsdoc': Rule<
    [
      RuleLevel,
      {
        checkConstructors?: boolean;
        checkGetters?: boolean | 'no-setter';
        checkSetters?: boolean | 'no-getter';
        contexts?: (
          | string
          | {
              context?: string;
              inlineCommentBlock?: boolean;
              minLineCount?: number;
            }
        )[];
        enableFixer?: boolean;
        exemptEmptyConstructors?: boolean;
        exemptEmptyFunctions?: boolean;
        fixerMessage?: string;
        minLineCount?: number;
        publicOnly?:
          | boolean
          | {
              ancestorsOnly?: boolean;
              cjs?: boolean;
              esm?: boolean;
              window?: boolean;
            };
        require?: {
          ArrowFunctionExpression?: boolean;
          ClassDeclaration?: boolean;
          ClassExpression?: boolean;
          FunctionDeclaration?: boolean;
          FunctionExpression?: boolean;
          MethodDefinition?: boolean;
        };
      },
    ]
  >;
}
