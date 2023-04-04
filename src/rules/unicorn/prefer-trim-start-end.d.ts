import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type PreferTrimStartEndRule = {
  /**
   *
   * @deprecated
   *
   * @see [prefer-trim-start-end](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#prefer-trim-start-end)
   */
  'unicorn/prefer-trim-start-end': Rule<[RuleLevel]>;
};
