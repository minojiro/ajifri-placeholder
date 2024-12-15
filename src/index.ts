const arr = ["アジフライ", "ドボ", "お刺身", "食え", "むむ…", "あ"];

export const ajifriPlaceholder = (length?: number, lengthMax?: number) => {
  if ((length ?? 1) <= -1) return "";
  if ((lengthMax ?? 1) <= -1) return "";

  length = length ?? 1;
  lengthMax = lengthMax ?? length;

  if (length > lengthMax) return "";

  const resultLength = ~~(Math.random() * (lengthMax - length + 1)) + length;

  let t = "";

  do {
    t += arr[Math.floor(Math.random() * arr.length)].repeat(
      Math.floor(Math.random() * 5) + 1
    );
  } while (t.length < resultLength);

  return t.slice(0, resultLength);
};
