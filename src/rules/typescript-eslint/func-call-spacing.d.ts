import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FuncCallSpacingRule = {
  /**
   * Require or disallow spacing between function identifiers and their invocations.
   *
   * @see [func-call-spacing](https://typescript-eslint.io/rules/func-call-spacing)
   */
  '@typescript-eslint/func-call-spacing': Rule<
    [
      RuleLevel,
      (
        | []
        | ['never']
        | []
        | ['always']
        | [
            'always',
            {
              allowNewlines?: boolean;
            },
          ]
      ),
    ]
  >;
};
