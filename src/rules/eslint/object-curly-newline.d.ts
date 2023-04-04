import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ObjectCurlyNewlineRule = {
  /**
   * Enforce consistent line breaks after opening and before closing braces.
   *
   * @see [object-curly-newline](https://eslint.org/docs/rules/object-curly-newline)
   */
  'object-curly-newline': Rule<
    [
      RuleLevel,
      (
        | (
            | ('always' | 'never')
            | {
                multiline?: boolean;
                minProperties?: number;
                consistent?: boolean;
              }
          )
        | {
            ObjectExpression?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ObjectPattern?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ImportDeclaration?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
            ExportDeclaration?:
              | ('always' | 'never')
              | {
                  multiline?: boolean;
                  minProperties?: number;
                  consistent?: boolean;
                };
          }
      ),
    ]
  >;
};
