import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferEs6ClassRule {
  /**
   * Enforce ES5 or ES6 class for React Components.
   *
   * @see [prefer-es6-class](https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md)
   */
  'react/prefer-es6-class': Rule<[RuleLevel, 'always' | 'never']>;
}
