import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoInterpolationInSnapshotsRule {
  /**
   * Disallow string interpolation in snapshots.
   *
   * @see [no-interpolation-in-snapshots](https://github.com/veritem/eslint-plugin-vitest/blob/main/docs/rules/no-interpolation-in-snapshots.md)
   */
  'vitest/no-interpolation-in-snapshots': Rule<[RuleLevel]>;
}
