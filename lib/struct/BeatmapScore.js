'use strict';

const Score = require('./Score');

/**
 * Score for an beatmap class
 * @memberof module:CustomClasses
 * @extends Score
 * @property {String} username Username of player
 * @property {Number} enabledMods Bitwise flag of mods used generated by the C#
 * @property {Number} userId Player's user ID
 * @property {Date} date Date score set
 * @property {String} rank Rank of play, e.g. SS
 * @property {Number} pp PP value achieved
 */
class BeatmapScore extends Score {
    constructor(data) {
        super(data);
        this.username = data.username;
        this.enabledMods = Number(data.enabled_mods);
        this.userId = Number(data.user_id);
        this.date = new Date(data.date + ' GMT+0800');
        this.rank = data.rank;
        this.pp = Number(data.pp);
    }
}

module.exports = BeatmapScore;