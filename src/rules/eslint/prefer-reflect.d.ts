import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferReflectRule {
  /**
   * Require `Reflect` methods where applicable.
   *
   * @deprecated
   *
   * @see [prefer-reflect](https://eslint.org/docs/rules/prefer-reflect)
   */
  'prefer-reflect': Rule<
    [
      RuleLevel,
      {
        exceptions?: (
          | 'apply'
          | 'call'
          | 'delete'
          | 'defineProperty'
          | 'getOwnPropertyDescriptor'
          | 'getPrototypeOf'
          | 'setPrototypeOf'
          | 'isExtensible'
          | 'getOwnPropertyNames'
          | 'preventExtensions'
        )[];
      },
    ]
  >;
}
