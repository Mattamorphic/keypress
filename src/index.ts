/**
 * @file Simple Keypress package
 * @author Mattamorphic
 */

/**
 * Pause until key press using an async function
 *
 * @return {Promise<NodeJS.ReadStream>}
 */
export const keypress = async (message: string): Promise<NodeJS.ReadStream> => {
  if (message) {
    console.log(message);
  }
  process.stdin.setRawMode(true);
  return new Promise(
    (resolve): NodeJS.ReadStream =>
      process.stdin.once(
        'data',
        (): void => {
          process.stdin.setRawMode(false);
          resolve();
        },
      ),
  );
};
