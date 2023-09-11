import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferDatasetRule {
  /**
   *
   * @deprecated
   *
   * @see [prefer-dataset](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#prefer-dataset)
   */
  'unicorn/prefer-dataset': Rule<[RuleLevel]>;
}
