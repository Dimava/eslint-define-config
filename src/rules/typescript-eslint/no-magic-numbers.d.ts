import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoMagicNumbersRule = {
  /**
   * Disallow magic numbers.
   *
   * @see [no-magic-numbers](https://typescript-eslint.io/rules/no-magic-numbers)
   */
  '@typescript-eslint/no-magic-numbers': Rule<
    [
      RuleLevel,
      {
        detectObjects?: boolean;
        enforceConst?: boolean;
        ignore?: (number | string)[];
        ignoreArrayIndexes?: boolean;
        ignoreDefaultValues?: boolean;
        ignoreClassFieldInitialValues?: boolean;
        ignoreNumericLiteralTypes?: boolean;
        ignoreEnums?: boolean;
        ignoreReadonlyClassProperties?: boolean;
        ignoreTypeIndexes?: boolean;
      },
    ]
  >;
};
