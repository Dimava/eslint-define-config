import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ImplementsOnClassesRule {
  /**
   * Reports an issue with any non-constructor function using `@implements`.
   *
   * @see [implements-on-classes](https://github.com/gajus/eslint-plugin-jsdoc/blob/main/docs/rules/implements-on-classes.md#repos-sticky-header)
   */
  'jsdoc/implements-on-classes': Rule<
    [
      RuleLevel,
      {
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
      },
    ]
  >;
}
