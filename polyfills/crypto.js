// Basic crypto polyfill
import 'react-native-get-random-values';
import { randomBytes } from '@ethersproject/random';

export default {
  getRandomValues: randomBytes,
  randomBytes: randomBytes,
  createHash: () => {},
  createHmac: () => {},
  pbkdf2: () => {},
  pbkdf2Sync: () => {},
  randomFillSync: () => {},
  randomBytes: () => {},
};
