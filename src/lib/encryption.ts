import Cryptr from "cryptr";

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;
if (!ENCRYPTION_KEY || ENCRYPTION_KEY.length === 0) {
  throw new Error(
    "ENCRYPTION_KEY environment variable must be set and non-empty"
  );
}
const cryptr = new Cryptr(ENCRYPTION_KEY);

export const encrypt = (text: string) => cryptr.encrypt(text);
export const decrypt = (text: string) => cryptr.decrypt(text);
