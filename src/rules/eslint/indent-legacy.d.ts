import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type IndentLegacyRule = {
  /**
   * Enforce consistent indentation.
   *
   * @deprecated
   *
   * @see [indent-legacy](https://eslint.org/docs/rules/indent-legacy)
   */
  'indent-legacy': Rule<
    [
      RuleLevel,
      'tab' | number,
      {
        SwitchCase?: number;
        VariableDeclarator?:
          | number
          | {
              var?: number;
              let?: number;
              const?: number;
              [k: string]: any;
            };
        outerIIFEBody?: number;
        MemberExpression?: number;
        FunctionDeclaration?: {
          parameters?: number | 'first';
          body?: number;
          [k: string]: any;
        };
        FunctionExpression?: {
          parameters?: number | 'first';
          body?: number;
          [k: string]: any;
        };
        CallExpression?: {
          parameters?: number | 'first';
          [k: string]: any;
        };
        ArrayExpression?: number | 'first';
        ObjectExpression?: number | 'first';
      },
    ]
  >;
};
