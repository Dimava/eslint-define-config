import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface CatchErrorNameRule {
  /**
   * Enforce a specific parameter name in catch clauses.
   *
   * @see [catch-error-name](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/rules/catch-error-name.md)
   */
  'unicorn/catch-error-name': Rule<
    [
      RuleLevel,
      {
        name?: string;
        ignore?: any[];
      },
    ]
  >;
}
