import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoFnReferenceInIteratorRule = {
  /**
   *
   * @deprecated
   *
   * @see [no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/deprecated-rules.md#no-fn-reference-in-iterator)
   */
  'unicorn/no-fn-reference-in-iterator': Rule<[RuleLevel]>;
};
