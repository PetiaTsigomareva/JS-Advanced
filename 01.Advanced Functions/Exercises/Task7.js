function solution() {
  function call (object, argument) {
    if (argument === 'score') {
      let result = getScoreResult();
      console.log(result);
    } else if (argument === 'upvote') {
      let upvotesProperty = 'upvotes';
      object[upvotesProperty] += 1;
      console.log(object);
    } else if (argument === 'downvote') {
      let downvotesProperty = 'downvotes';
      object[downvotesProperty] += 1;
      console.log(object);
    } else {
      //invalided argument
    }
  }

  function getScoreResult() {
    let result = [];
    console.log("Score");

    return result;
  }

  return {call};
}

let post = {
  id: '3',
  author: 'emil',
  content: 'wazaaaaa',
  upvotes: 100,
  downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score');

//Todor
// function monkeyPatcher(action) {
//   let obj;
//   let that = this;
//   obj = (() => {
//     function upvote() {
//       that.upvotes++
//     }
//
//     const downvote = () => {
//       that.downvotes++
//     };
//
//     let score;
//     score = () => {
//       let obfuscated = that.upvotes + that.downvotes > 50;
//       let votesToAdd = Math.ceil(0.25 * Math.max(that.upvotes, that.downvotes));
//       let rating;
//       rating = that.upvotes / (that.upvotes + that.downvotes) > 0.66 ? "hot" : rating = (that.upvotes > 100 || that.downvotes > 100) && that.upvotes >= that.downvotes ? "controversial" : rating = that.downvotes > that.upvotes ? "unpopular" : "new";
//
//       if (that.upvotes + that.downvotes < 10) {
//         rating = "new";
//       }
//
//       return obfuscated ? [that.upvotes + votesToAdd, that.downvotes + votesToAdd, that.upvotes - that.downvotes, rating] : [that.upvotes, that.downvotes, that.upvotes - that.downvotes, rating];
//     };
//
//     return {upvote, downvote, score};
//   })();
//
//   return obj[action]();
// }