import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export type UnicodeBomRule = {
  /**
   * Require or disallow Unicode byte order mark (BOM).
   *
   * @see [unicode-bom](https://eslint.org/docs/rules/unicode-bom)
   */
  'unicode-bom': Rule<[RuleLevel, 'always' | 'never']>;
};
