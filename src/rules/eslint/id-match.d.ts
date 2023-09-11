import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface IdMatchRule {
  /**
   * Require identifiers to match a specified regular expression.
   *
   * @see [id-match](https://eslint.org/docs/latest/rules/id-match)
   */
  'id-match': Rule<
    [
      RuleLevel,
      string,
      {
        properties?: boolean;
        classFields?: boolean;
        onlyDeclarations?: boolean;
        ignoreDestructuring?: boolean;
      },
    ]
  >;
}
