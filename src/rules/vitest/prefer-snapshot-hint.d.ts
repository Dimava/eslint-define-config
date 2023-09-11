import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface PreferSnapshotHintRule {
  /**
   * Prefer including a hint with external snapshots.
   *
   * @see [prefer-snapshot-hint](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/prefer-snapshot-hint.md)
   */
  'vitest/prefer-snapshot-hint': Rule<[RuleLevel, 'always' | 'multi']>;
}
