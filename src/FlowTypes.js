/**
 * @flow
 */


export type LoadCallbackType = {
  onSuccess: () => void,
  onError?: () => void
};

export type CharsetType =
  "utf-16" |
  "utf-16le" |
  "utf-16be" |
  "utf-8" |
  "iso-8859-1";
