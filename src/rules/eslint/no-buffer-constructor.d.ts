import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoBufferConstructorRule = {
  /**
   * Disallow use of the `Buffer()` constructor.
   *
   * @deprecated
   *
   * @see [no-buffer-constructor](https://eslint.org/docs/rules/no-buffer-constructor)
   */
  'no-buffer-constructor': Rule<[RuleLevel]>;
};
