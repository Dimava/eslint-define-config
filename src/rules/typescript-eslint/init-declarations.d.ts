import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type InitDeclarationsRule = {
  /**
   * Require or disallow initialization in variable declarations.
   *
   * @see [init-declarations](https://typescript-eslint.io/rules/init-declarations)
   */
  '@typescript-eslint/init-declarations': Rule<
    [
      RuleLevel,
      (
        | []
        | ['always']
        | []
        | ['never']
        | [
            'never',
            {
              ignoreForLoopInit?: boolean;
            },
          ]
      ),
    ]
  >;
};
