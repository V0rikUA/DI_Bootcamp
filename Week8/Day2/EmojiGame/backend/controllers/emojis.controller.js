import shuffleArray from "../utils/shuffleArray.js";
import { emojis } from "../utils/constants.js";
import randomNumber from "../utils/rondomNumber.js";

let randomEmoji = {};
let emojiIndex = 0;

export const getAllEmojis = (req, res) => {
  shuffleArray(emojis);
  emojiIndex = randomNumber(emojis.length - 1);
  randomEmoji = emojis[emojiIndex];

  console.log("EmogiIndex =>" + emojiIndex);
  console.log("emogis length =>" + emojis.length);

  /*
   * Self-invoking function to retrieve a subset of emoji names.
   *
   * This function calculates a range of indices around a specified `emojiIndex`.
   * It then extracts emoji names from the `emojis` array within this range.
   * If the range goes beyond the start or end of the `emojis` array,
   * it adjusts the range by generating a random index within allowed bounds.
   *
   * responding with emoji names to reduce amount of code at frontend
   */
  const emojisName = (function () {
    let fromIndex =
      emojiIndex - 5 >= 1 ? emojiIndex - 5 : randomNumber(emojiIndex);
    console.log(fromIndex);
    let toIndex =
      emojiIndex + 5 > emojis.length
        ? randomNumber(emojis.length, emojiIndex)
        : emojiIndex + 5;
    console.log(toIndex);
    const result = [];
    emojis.slice(fromIndex, toIndex).forEach((item) => {
      result.push(item.name);
    });
    console.log(result);
    return result;
  })();

  res.status(200).json({ randomEmoji, emojisName });
};
