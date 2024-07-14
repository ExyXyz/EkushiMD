"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPath = exports.checkType = exports.getProperURL = exports.checkLinkType = void 0;
const fs_1 = require("fs");
const util_1 = require("util");
const os_1 = __importDefault(require("os"));
const checkLinkType = (link) => {
    const reg = /^(?:spotify:|(?:https?:\/\/(?:open|play|embed)\.spotify\.com\/))(?:embed|\?uri=spotify:|embed\?uri=spotify:)?\/?(album|track|playlist)(?::|\/)((?:[0-9a-zA-Z]){22})/;
    const match = link.match(reg);
    if (match) {
        return {
            type: match[1],
            id: match[2]
        };
    }
    else {
        throw { name: 'URL Error', message: `'${link}' is not a Spotify URL...` };
    }
};
exports.checkLinkType = checkLinkType;
const getProperURL = (id, type) => {
    // UPDATE: Embed link doesn't allow scraping anymore due to new Spotify UI change
    // return `https://embed.spotify.com/?uri=spotify:${type}:${id}`
    return `https://open.spotify.com/${type}/${id}`;
};
exports.getProperURL = getProperURL;
/**
 * Check the type of the object, can be of type <Track>, <Album> or <Results[]>
 * @param {Track|Album|Playlist|Results[]} ob An object, can be type <Track>, <Album> or <Results[]>
 * @returns {string} "Track" | "Album" | "Playlist" | "Results[]" | "None"
 */
const checkType = (ob) => {
    if ('title' in ob && 'trackNumber' in ob) {
        return 'Track';
    }
    else if ('name' in ob && 'tracks' in ob && 'albumCoverURL' in ob) {
        return 'Album';
    }
    else if ('name' in ob && 'owner' in ob && 'playlistCoverURL' in ob) {
        return 'Playlist';
    }
    else if ('status' in ob[0] && 'filename' in ob[0] && (0, util_1.isArray)(ob) == true) {
        return 'Results[]';
    }
    else {
        return 'None';
    }
};
exports.checkType = checkType;
/**
 * Check the path if it exists, if not then we throw an error
 * @param {string} path A string that specifies the path
 * @returns {string} `path` modified to be absolute
 */
const checkPath = (path) => {
    // First we convert tilda/~ to the home directory
    let c = path.replace(`~`, os_1.default.homedir());
    if (!(0, fs_1.existsSync)(c)) {
        throw Error('Filepath:( ' + c + " ) doesn't exist, please specify absolute path");
    }
    else if (c.slice(-1) != '/') {
        return `${c}/`;
    }
    return c;
};
exports.checkPath = checkPath;
