import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferNativeCoercionFunctionsRule {
  /**
   * Prefer using `String`, `Number`, `BigInt`, `Boolean`, and `Symbol` directly.
   *
   * @see [prefer-native-coercion-functions](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/v46.0.0/docs/rules/prefer-native-coercion-functions.md)
   */
  'unicorn/prefer-native-coercion-functions': Rule<[RuleLevel]>;
}
