import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface InitDeclarationsRule {
  /**
   * Require or disallow initialization in variable declarations.
   *
   * @see [init-declarations](https://eslint.org/docs/latest/rules/init-declarations)
   */
  'init-declarations': Rule<
    [
      RuleLevel,
      ...(
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
}
