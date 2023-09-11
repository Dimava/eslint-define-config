import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface AccessorPairsRule {
  /**
   * Enforce getter and setter pairs in objects and classes.
   *
   * @see [accessor-pairs](https://eslint.org/docs/latest/rules/accessor-pairs)
   */
  'accessor-pairs': Rule<
    [
      RuleLevel,
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
        enforceForClassMembers?: boolean;
      },
    ]
  >;
}
