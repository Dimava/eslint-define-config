import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ObjectCurlyNewlineRule {
  /**
   * Enforce consistent line breaks inside braces.
   *
   * @see [object-curly-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/object-curly-newline.html)
   */
  'jsonc/object-curly-newline': Rule<
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
}
