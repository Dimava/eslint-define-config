import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FuncNamesRule = {
  /**
   * Require or disallow named `function` expressions.
   *
   * @see [func-names](https://eslint.org/docs/rules/func-names)
   */
  'func-names': Rule<
    [
      RuleLevel,
      (
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
};
type Value = 'always' | 'as-needed' | 'never';
