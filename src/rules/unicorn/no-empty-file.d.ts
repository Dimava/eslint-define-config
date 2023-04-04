import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoEmptyFileRule = {
  /**
   * Disallow empty files.
   *
   * @see [no-empty-file](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/no-empty-file.md)
   */
  'unicorn/no-empty-file': Rule<[RuleLevel]>;
};
