import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface EqeqeqRule {
  /**
   * Require the use of `===` and `!==`.
   *
   * @see [eqeqeq](https://eslint.org/docs/latest/rules/eqeqeq)
   */
  eqeqeq: Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always']
        | [
            'always',
            {
              null?: 'always' | 'never' | 'ignore';
            },
          ]
        | []
        | ['smart' | 'allow-null']
      ),
    ]
  >;
}
