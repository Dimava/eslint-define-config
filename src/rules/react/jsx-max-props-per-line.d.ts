import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxMaxPropsPerLineRule {
  /**
   * Enforce maximum of props on a single line in JSX.
   *
   * @see [jsx-max-props-per-line](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md)
   */
  'react/jsx-max-props-per-line': Rule<
    [
      RuleLevel,
      (
        | {
            maximum?: {
              single?: number;
              multi?: number;
              [k: string]: any;
            };
          }
        | {
            maximum?: number;
            when?: 'always' | 'multiline';
          }
      ),
    ]
  >;
}
