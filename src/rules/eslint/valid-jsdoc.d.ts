import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface ValidJsdocRule {
  /**
   * Enforce valid JSDoc comments.
   *
   * @deprecated
   *
   * @see [valid-jsdoc](https://eslint.org/docs/rules/valid-jsdoc)
   */
  'valid-jsdoc': Rule<
    [
      RuleLevel,
      {
        prefer?: {
          [k: string]: string;
        };
        preferType?: {
          [k: string]: string;
        };
        requireReturn?: boolean;
        requireParamDescription?: boolean;
        requireReturnDescription?: boolean;
        matchDescription?: string;
        requireReturnType?: boolean;
        requireParamType?: boolean;
      },
    ]
  >;
}
