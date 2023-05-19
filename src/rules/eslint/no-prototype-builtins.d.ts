import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoPrototypeBuiltinsRule {
  /**
   * Disallow calling some `Object.prototype` methods directly on objects.
   *
   * @see [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
   */
  'no-prototype-builtins': Rule<[RuleLevel]>;
}
