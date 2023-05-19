import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoMagicNumbersRule {
  /**
   * Disallow magic numbers.
   *
   * @see [no-magic-numbers](https://eslint.org/docs/rules/no-magic-numbers)
   */
  'no-magic-numbers': Rule<
    [
      RuleLevel,
      {
        detectObjects?: boolean;
        enforceConst?: boolean;
        ignore?: (number | string)[];
        ignoreArrayIndexes?: boolean;
        ignoreDefaultValues?: boolean;
        ignoreClassFieldInitialValues?: boolean;
      },
    ]
  >;
}
