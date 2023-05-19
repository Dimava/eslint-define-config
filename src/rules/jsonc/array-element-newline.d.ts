import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrayElementNewlineRule {
  /**
   * Enforce line breaks between array elements.
   *
   * @see [array-element-newline](https://ota-meshi.github.io/eslint-plugin-jsonc/rules/array-element-newline.html)
   */
  'jsonc/array-element-newline': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [
            | BasicConfig
            | {
                ArrayExpression?: BasicConfig;
                ArrayPattern?: BasicConfig;
              },
          ]
      ),
    ]
  >;
}
type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };
