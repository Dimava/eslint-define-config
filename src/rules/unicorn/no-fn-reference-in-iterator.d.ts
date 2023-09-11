import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoFnReferenceInIteratorRule {
  /**
   *
   * @deprecated
   *
   * @see [no-fn-reference-in-iterator](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v48.0.1/docs/deprecated-rules.md#no-fn-reference-in-iterator)
   */
  'unicorn/no-fn-reference-in-iterator': Rule<[RuleLevel]>;
}
