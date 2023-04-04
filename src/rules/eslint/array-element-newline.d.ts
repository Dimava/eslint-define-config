import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ArrayElementNewlineRule = {
  /**
   * Enforce line breaks after each array element.
   *
   * @see [array-element-newline](https://eslint.org/docs/rules/array-element-newline)
   */
  'array-element-newline': Rule<
    [
      RuleLevel,
      (
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
};
type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };
