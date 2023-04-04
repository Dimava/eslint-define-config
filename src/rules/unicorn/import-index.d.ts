import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ImportIndexRule = {
  /**
   *
   * @deprecated
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#import-index)
   */
  'unicorn/import-index': Rule<[RuleLevel]>;
};
