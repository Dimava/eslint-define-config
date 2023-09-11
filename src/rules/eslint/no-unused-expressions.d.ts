import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoUnusedExpressionsRule {
  /**
   * Disallow unused expressions.
   *
   * @see [no-unused-expressions](https://eslint.org/docs/latest/rules/no-unused-expressions)
   */
  'no-unused-expressions': Rule<
    [
      RuleLevel,
      {
        allowShortCircuit?: boolean;
        allowTernary?: boolean;
        allowTaggedTemplates?: boolean;
        enforceForJSX?: boolean;
      },
    ]
  >;
}
