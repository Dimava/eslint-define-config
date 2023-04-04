import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type InitDeclarationsRule = {
  /**
   * Require or disallow initialization in variable declarations.
   *
   * @see [init-declarations](https://eslint.org/docs/rules/init-declarations)
   */
  'init-declarations': Rule<
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
