import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoExtraneousClassRule = {
  /**
   * Disallow classes used as namespaces.
   *
   * @see [no-extraneous-class](https://typescript-eslint.io/rules/no-extraneous-class)
   */
  '@typescript-eslint/no-extraneous-class': Rule<
    [
      RuleLevel,
      {
        /**
         * Whether to allow extraneous classes that contain only a constructor.
         */
        allowConstructorOnly?: boolean;
        /**
         * Whether to allow extraneous classes that have no body (i.e. are empty).
         */
        allowEmpty?: boolean;
        /**
         * Whether to allow extraneous classes that only contain static members.
         */
        allowStaticOnly?: boolean;
        /**
         * Whether to allow extraneous classes that include a decorator.
         */
        allowWithDecorator?: boolean;
      },
    ]
  >;
};
