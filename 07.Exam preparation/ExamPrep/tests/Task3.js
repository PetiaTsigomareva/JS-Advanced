const assert = require('chai').assert;

class SoftUniFy {
  constructor() {
    this.allSongs = {};
  }

  downloadSong(artist, song, lyrics) {
    if (!this.allSongs[artist]) {
      this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
    }

    this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);

    return this;
  }

  playSong(song) {
    let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {

      let songs = this.allSongs[cur]['songs']
        .filter((songInfo) => songInfo
          .split(/ - /)[0] === song);

      if (songs.length > 0) {
        acc[cur] = songs;
      }

      return acc;
    }, {});

    let arr = Object.keys(songArtists);
    let output = "";

    if (arr.length > 0) {

      arr.forEach((artist) => {
        output += `${artist}:\n`;
        output += `${songArtists[artist].join('\n')}\n`;
      });

    } else {
      output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
    }

    return output;
  }

  get songsList() {
    let songs = Object.values(this.allSongs)
      .map((v) => v['songs'])
      .reduce((acc, cur) => {
        return acc.concat(cur);
      }, []);

    let output;

    if (songs.length > 0) {
      output = songs.join('\n');
    } else {
      output = 'Your song list is empty';
    }

    return output;

  }

  rateArtist() {
    let artistExist = this.allSongs[arguments[0]];
    let output;

    if (artistExist) {

      if (arguments.length === 2) {
        artistExist['rate'] += +arguments[1];
        artistExist['votes'] += 1;
      }

      let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
      isNaN(currentRate) ? output = 0 : output = currentRate;

    } else {
      output = `The ${arguments[0]} is not on your artist list.`
    }

    return output;
  }
}
describe('test SoftUniFy class methods', function () {
//allSongs is it object
  it('test is allSongs is an object', function () {
    let mySoftUniFy = new SoftUniFy();
    assert.deepEqual(mySoftUniFy.allSongs, {});

  });

  it('test downloadSong with correct data, should add artist property successful', function () {
    let mySoftUniFy = new SoftUniFy();
    mySoftUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
    assert(mySoftUniFy.allSongs.hasOwnProperty('Eminem'), 'allSongs have not artist with name Eminem!')
  });

  it('test downloadSong whit correct data, should add song successful', function () {
    let mySoftUniFy = new SoftUniFy();
    mySoftUniFy.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
    assert.strictEqual(mySoftUniFy.allSongs['Eminem'].songs.length, 1, 'The artist songs not contain song Venom!')
  });
  it('test playSong is the song empty, should return error message', function () {
    let mySoftUniFy = new SoftUniFy();
    assert(mySoftUniFy.playSong('Venom'), "You have not downloaded a Venom song yet. Use SoftUniFy's function downloadSong() to change that!")
  });
  it('test rate artist', function () {
    let mySoftUniFy = new SoftUniFy();
    assert(mySoftUniFy.rateArtist('artist'), 'The artist is not on your artist list');
  });

});