import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoLargeSnapshotsRule {
  /**
   * Disallow large snapshots.
   *
   * @see [no-large-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-large-snapshots.md)
   */
  'vitest/no-large-snapshots': Rule<
    [
      RuleLevel,
      {
        maxSize?: number;
        inlineMaxSize?: number;
        allowedSnapshots?: {
          [k: string]: any[];
        };
      },
    ]
  >;
}
