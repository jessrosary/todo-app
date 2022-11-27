const buzzwords = [
  'big data',
  'brainstorm',
  'circle back',
  'clickbait',
  'disruption',
  'grindset',
  'leverage',
  'pivot(\\s|$)',
  'rise and grind',
  'synergy',
  'thought leader',
  'touch base',
];

const buzzwordRe = new RegExp(`(${buzzwords.join('|')})`, 'i');

export const hasBuzzword = (text) => buzzwordRe.test(text);

// export const hasBuzzword = (text) => {
//   const matches = text.match(buzzwordRe);
//   const test = buzzwordRe.test(text);

//   console.log({ buzzwordRe, test, match: matches && matches[0] });

//   return test;

//   // for (const buzzword of buzzwords) {
//   //   if (buzzword === text) {
//   //     return true;
//   //   }
//   // }
// };
