import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ArrowBodyStyleRule {
  /**
   * Require braces around arrow function bodies.
   *
   * @see [arrow-body-style](https://eslint.org/docs/rules/arrow-body-style)
   */
  'arrow-body-style': Rule<
    [
      RuleLevel,
      ...(
        | []
        | ['always' | 'never']
        | []
        | ['as-needed']
        | [
            'as-needed',
            {
              requireReturnForObjectLiteral?: boolean;
            },
          ]
      ),
    ]
  >;
}
