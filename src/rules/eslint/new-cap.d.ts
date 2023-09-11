import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NewCapRule {
  /**
   * Require constructor names to begin with a capital letter.
   *
   * @see [new-cap](https://eslint.org/docs/latest/rules/new-cap)
   */
  'new-cap': Rule<
    [
      RuleLevel,
      {
        newIsCap?: boolean;
        capIsNew?: boolean;
        newIsCapExceptions?: string[];
        newIsCapExceptionPattern?: string;
        capIsNewExceptions?: string[];
        capIsNewExceptionPattern?: string;
        properties?: boolean;
      },
    ]
  >;
}
