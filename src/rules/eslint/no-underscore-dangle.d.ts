import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoUnderscoreDangleRule = {
  /**
   * Disallow dangling underscores in identifiers.
   *
   * @see [no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)
   */
  'no-underscore-dangle': Rule<
    [
      RuleLevel,
      {
        allow?: string[];
        allowAfterThis?: boolean;
        allowAfterSuper?: boolean;
        allowAfterThisConstructor?: boolean;
        enforceInMethodNames?: boolean;
        allowFunctionParams?: boolean;
        enforceInClassFields?: boolean;
        allowInArrayDestructuring?: boolean;
        allowInObjectDestructuring?: boolean;
      },
    ]
  >;
};
