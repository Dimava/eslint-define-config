import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxCurlySpacingRule {
  /**
   * Enforce or disallow spaces inside of curly braces in JSX attributes and expressions.
   *
   * @see [jsx-curly-spacing](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md)
   */
  'react/jsx-curly-spacing': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [
            | (BasicConfig & {
                attributes?: BasicConfigOrBoolean;
                children?: BasicConfigOrBoolean;
                [k: string]: any;
              })
            | ('always' | 'never'),
          ]
        | [
            (
              | (BasicConfig & {
                  attributes?: BasicConfigOrBoolean;
                  children?: BasicConfigOrBoolean;
                  [k: string]: any;
                })
              | ('always' | 'never')
            ),
            {
              allowMultiline?: boolean;
              spacing?: {
                objectLiterals?: 'always' | 'never';
                [k: string]: any;
              };
            },
          ]
      ),
    ]
  >;
}
type BasicConfigOrBoolean = BasicConfig | boolean;

interface BasicConfig {
  when?: 'always' | 'never';
  allowMultiline?: boolean;
  spacing?: {
    objectLiterals?: 'always' | 'never';
    [k: string]: any;
  };
  [k: string]: any;
}
