import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type FuncCallSpacingRule = {
  /**
   * Require or disallow spacing between function identifiers and their invocations.
   *
   * @see [func-call-spacing](https://eslint.org/docs/rules/func-call-spacing)
   */
  'func-call-spacing': Rule<
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
