import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RulesOfHooksRule {
  /**
   * Enforces the Rules of Hooks.
   *
   * @see [rules-of-hooks](https://reactjs.org/docs/hooks-rules.html)
   */
  'react-hooks/rules-of-hooks': Rule<[RuleLevel]>;
}
