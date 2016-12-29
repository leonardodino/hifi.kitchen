import {c} from '@stayradiated/mandarin'

export const CONFIG_TIMELINE_UPDATE_TIME = 1000 * 10

export const CREATE_QUEUE           = c`CREATE_QUEUE`
export const FETCH_ALBUM            = c`FETCH_ALBUM`
export const FETCH_ALBUM_TRACKS     = c`FETCH_ALBUM_TRACKS`
export const FETCH_LIBRARY_ALBUMS   = c`FETCH_LIBRARY_ALBUMS`
export const FETCH_LIBRARY_SECTIONS = c`FETCH_LIBRARY_SECTIONS`
export const RATE_TRACK             = c`RATE_TRACK`
export const UPDATE_TIMELINE        = c`UPDATE_TIMELINE`

export const SELECT_QUEUE_ITEM       = 'SELECT_QUEUE_ITEM'
export const SET_PLAYER_CURRENT_TIME = 'SET_PLAYER_CURRENT_TIME'

export const PLAYER_STATE_PLAYING = 'playing'
export const PLAYER_STATE_PAUSED  = 'paused'
export const PLAYER_STATE_STOPPED = 'stopped'