import type { Rule } from '../rule-config';
import type { RuleLevel } from '../rule-severity';
export interface NoAwaitSyncEventsRule {
  /**
   * Disallow unnecessary `await` for sync events.
   *
   * @see [no-await-sync-events](https://github.com/testing-library/eslint-plugin-testing-library/tree/main/docs/rules/no-await-sync-events.md)
   */
  'testing-library/no-await-sync-events': Rule<
    [
      RuleLevel,
      {
        /**
         * @minItems 1
         */
        eventModules?: [
          'fire-event' | 'user-event',
          ...('fire-event' | 'user-event')[],
        ];
      },
    ]
  >;
}
