import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type RequireDescriptionRule = {
  /**
   * Requires that all functions have a description.
   *
   * @see [require-description](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-description)
   */
  'jsdoc/require-description': Rule<
    [
      RuleLevel,
      {
        checkConstructors?: boolean;
        checkGetters?: boolean;
        checkSetters?: boolean;
        contexts?: (
          | string
          | {
              comment?: string;
              context?: string;
            }
        )[];
        descriptionStyle?: 'body' | 'tag' | 'any';
        exemptedBy?: string[];
      },
    ]
  >;
};
