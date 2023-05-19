import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoConsoleSpacesRule {
  /**
   * Do not use leading/trailing space between `console.log` parameters.
   *
   * @see [no-console-spaces](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-console-spaces.md)
   */
  'unicorn/no-console-spaces': Rule<[RuleLevel]>;
}
