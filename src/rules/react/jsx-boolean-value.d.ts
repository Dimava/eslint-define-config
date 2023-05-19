import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxBooleanValueRule {
  /**
   * Enforce boolean attributes notation in JSX.
   *
   * @see [jsx-boolean-value](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md)
   */
  'react/jsx-boolean-value': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always' | 'never']
        | []
        | ['always']
        | [
            'always',
            {
              never?: string[];
            },
          ]
        | []
        | ['never']
        | [
            'never',
            {
              always?: string[];
            },
          ]
      ),
    ]
  >;
}
