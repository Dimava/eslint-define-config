import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface GroupedAccessorPairsRule {
  /**
   * Require grouped accessor pairs in object literals and classes.
   *
   * @see [grouped-accessor-pairs](https://eslint.org/docs/latest/rules/grouped-accessor-pairs)
   */
  'grouped-accessor-pairs': Rule<
    [RuleLevel, 'anyOrder' | 'getBeforeSet' | 'setBeforeGet']
  >;
}
