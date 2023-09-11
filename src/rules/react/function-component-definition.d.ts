import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FunctionComponentDefinitionRule {
  /**
   * Enforce a specific function type for function components.
   *
   * @see [function-component-definition](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md)
   */
  'react/function-component-definition': Rule<
    [
      RuleLevel,
      {
        namedComponents?:
          | ('function-declaration' | 'arrow-function' | 'function-expression')
          | (
              | 'function-declaration'
              | 'arrow-function'
              | 'function-expression'
            )[];
        unnamedComponents?:
          | ('arrow-function' | 'function-expression')
          | ('arrow-function' | 'function-expression')[];
        [k: string]: any;
      },
    ]
  >;
}
