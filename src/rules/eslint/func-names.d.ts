import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface FuncNamesRule {
  /**
   * Require or disallow named `function` expressions.
   *
   * @see [func-names](https://eslint.org/docs/latest/rules/func-names)
   */
  'func-names': Rule<
    [
      RuleLevel,
      ...(
        | []
        | [Value]
        | [
            Value,
            {
              generators?: Value;
            },
          ]
      ),
    ]
  >;
}
type Value = 'always' | 'as-needed' | 'never';
