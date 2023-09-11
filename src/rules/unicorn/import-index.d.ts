import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ImportIndexRule {
  /**
   *
   * @deprecated
   *
   * @see [import-index](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#import-index)
   */
  'unicorn/import-index': Rule<[RuleLevel]>;
}
