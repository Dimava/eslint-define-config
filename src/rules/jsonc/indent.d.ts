import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type IndentRule = {
  /**
   * Enforce consistent indentation.
   *
   * @see [indent](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/indent.html)
   */
  'jsonc/indent': Rule<
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
};
