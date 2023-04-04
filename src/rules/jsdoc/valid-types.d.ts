import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type ValidTypesRule = {
  /**
   * Requires all types to be valid JSDoc or Closure compiler types without syntax errors.
   *
   * @see [valid-types](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-valid-types)
   */
  'jsdoc/valid-types': Rule<
    [
      RuleLevel,
      {
        allowEmptyNamepaths?: boolean;
        [k: string]: any;
      },
    ]
  >;
};
