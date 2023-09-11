import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IndentRule {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://eslint.org/docs/latest/rules/indent)
   */
  indent: Rule<
    [
      RuleLevel,
      'tab' | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | (number | ('first' | 'off'))
          | {
              var?: number | ('first' | 'off');
              let?: number | ('first' | 'off');
              const?: number | ('first' | 'off');
            };
        outerIIFEBody?: number | 'off';
        MemberExpression?: number | 'off';
        FunctionDeclaration?: {
          parameters?: number | ('first' | 'off');
          body?: number;
        };
        FunctionExpression?: {
          parameters?: number | ('first' | 'off');
          body?: number;
        };
        StaticBlock?: {
          body?: number;
        };
        CallExpression?: {
          arguments?: number | ('first' | 'off');
        };
        ArrayExpression?: number | ('first' | 'off');
        ObjectExpression?: number | ('first' | 'off');
        ImportDeclaration?: number | ('first' | 'off');
        flatTernaryExpressions?: boolean;
        offsetTernaryExpressions?: boolean;
        ignoredNodes?: string[];
        ignoreComments?: boolean;
      },
    ]
  >;
}
