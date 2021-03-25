import { LoremIpsum } from 'lorem-ipsum';

const loremIpsum = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

export { loremIpsum };
