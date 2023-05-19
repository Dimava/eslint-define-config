import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface MaxNestedCallbacksRule {
  /**
   * Enforce a maximum depth that callbacks can be nested.
   *
   * @see [max-nested-callbacks](https://eslint.org/docs/rules/max-nested-callbacks)
   */
  'max-nested-callbacks': Rule<
    [
      RuleLevel,
      (
        | number
        | {
            maximum?: number;
            max?: number;
          }
      ),
    ]
  >;
}
