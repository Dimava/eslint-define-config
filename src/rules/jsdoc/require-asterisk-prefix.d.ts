import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface RequireAsteriskPrefixRule {
  /**
   *
   */
  'jsdoc/require-asterisk-prefix': Rule<
    [
      RuleLevel,
      'always' | 'never' | 'any',
      {
        tags?: {
          always?: string[];
          any?: string[];
          never?: string[];
          [k: string]: any;
        };
      },
    ]
  >;
}
