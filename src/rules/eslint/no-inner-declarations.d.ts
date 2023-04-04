import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type NoInnerDeclarationsRule = {
  /**
   * Disallow variable or `function` declarations in nested blocks.
   *
   * @see [no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)
   */
  'no-inner-declarations': Rule<[RuleLevel, 'functions' | 'both']>;
};
