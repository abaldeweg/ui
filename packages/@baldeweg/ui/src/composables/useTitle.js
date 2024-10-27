import { ref, watchEffect } from 'vue'

/**
 * Provides a reactive way to manage the document title.
 *
 * @param {object} options An object containing the initial title.
 *
 * @returns {object} An object containing the options ref.
 *
 * @example
 * import { useTitle } from '@baldeweg/ui';
 *
 * const { options } = useTitle({
 *   title: 'My Website',
 * });
 */
export function useTitle(options) {
  const title = ref(options.title)

  watchEffect(() => {
    document.title = title.value ?? null
  })

  return { options }
}
