import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnnecessaryConditionRule = {
  /**
   * Disallow conditionals where the type is always truthy or always falsy.
   *
   * @see [no-unnecessary-condition](https://typescript-eslint.io/rules/no-unnecessary-condition)
   */
  '@typescript-eslint/no-unnecessary-condition': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to ignore constant loop conditions, such as `while (true)`.
         */
        allowConstantLoopConditions?: boolean;
        /**
         * Whether to not error when running with a tsconfig that has strictNullChecks turned.
         */
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      },
    ]
  >;
};
