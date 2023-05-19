import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDestructuringRule {
  /**
   * Require destructuring from arrays and/or objects.
   *
   * @see [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)
   */
  'prefer-destructuring': Rule<
    [
      RuleLevel,
      (
        | {
            VariableDeclarator?: {
              array?: boolean;
              object?: boolean;
            };
            AssignmentExpression?: {
              array?: boolean;
              object?: boolean;
            };
          }
        | {
            array?: boolean;
            object?: boolean;
          }
      ),
      {
        enforceForRenamedProperties?: boolean;
      },
    ]
  >;
}
