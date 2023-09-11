import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ExhaustiveDepsRule {
  /**
   * Verifies the list of dependencies for Hooks like useEffect and similar.
   *
   * @see [exhaustive-deps](https://github.com/facebook/react/issues/14920)
   */
  'react-hooks/exhaustive-deps': Rule<
    [
      RuleLevel,
      {
        additionalHooks?: string;
        enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
      },
    ]
  >;
}
