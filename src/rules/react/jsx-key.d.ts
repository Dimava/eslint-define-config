import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface JsxKeyRule {
  /**
   * Disallow missing `key` props in iterators/collection literals.
   *
   * @see [jsx-key](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md)
   */
  'react/jsx-key': Rule<
    [
      RuleLevel,
      {
        checkFragmentShorthand?: boolean;
        checkKeyMustBeforeSpread?: boolean;
        warnOnDuplicates?: boolean;
      },
    ]
  >;
}
