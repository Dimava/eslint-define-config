import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoThisAliasRule = {
  /**
   * Disallow aliasing `this`.
   *
   * @see [no-this-alias](https://typescript-eslint.io/rules/no-this-alias)
   */
  '@typescript-eslint/no-this-alias': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to ignore destructurings, such as `const { props, state } = this`.
         */
        allowDestructuring?: boolean;
        /**
         * Names to ignore, such as ["self"] for `const self = this;`.
         */
        allowedNames?: string[];
      },
    ]
  >;
};
