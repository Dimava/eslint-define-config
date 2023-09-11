import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ConsistentFunctionScopingRule {
  /**
   * Move function definitions to the highest possible scope.
   *
   * @see [consistent-function-scoping](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/consistent-function-scoping.md)
   */
  'unicorn/consistent-function-scoping': Rule<
    [
      RuleLevel,
      {
        checkArrowFunctions?: boolean;
      },
    ]
  >;
}
