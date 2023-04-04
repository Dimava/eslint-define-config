import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEmptyInterfaceRule = {
  /**
   * Disallow the declaration of empty interfaces.
   *
   * @see [no-empty-interface](https://typescript-eslint.io/rules/no-empty-interface)
   */
  '@typescript-eslint/no-empty-interface': Rule<
    [
      RuleLevel,
      {
        allowSingleExtends?: boolean;
      },
    ]
  >;
};
