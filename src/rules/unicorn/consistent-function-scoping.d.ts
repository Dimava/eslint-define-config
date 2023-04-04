import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ConsistentFunctionScopingRule = {
  /**
   * Move function definitions to the highest possible scope.
   *
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': Rule<
    [
      RuleLevel,
      {
        checkArrowFunctions?: boolean;
      },
    ]
  >;
};
