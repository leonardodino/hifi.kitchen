import React, {PropTypes} from 'react'

import Panel from '../Panel'
import TrackList from '../TrackList'

export default function PlaylistPanel (props) {
  const {
    playlist, values, currentlyPlayingTrackId,
    onSelectTrack, onLoadItems, onRateTrack,
    ...otherProps
  } = props

  const details = {
    thumb: playlist.composite,
    title: playlist.title,
    subtitle: 'Playlist',
    meta: `${playlist.tracks.length} items`,
  }

  const playlistTracks = values.playlistTracks.get(playlist.id) || []

  return (
    <Panel {...otherProps} details={details}>
      <TrackList
        displayArtist
        trackIds={playlistTracks}
        values={values}
        currentlyPlayingTrackId={currentlyPlayingTrackId}
        onRateTrack={onRateTrack}
        onSelectTrack={onSelectTrack}
        onLoadItems={onLoadItems}
      />
    </Panel>
  )
}

PlaylistPanel.propTypes = {
  values: PropTypes.shape({
    playlistTracks: PropTypes.instanceOf(Map),
    tracks: PropTypes.instanceOf(Map),
  }).isRequired,
  playlist: PropTypes.shape({
    tracks: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  currentlyPlayingTrackId: PropTypes.number,
  onLoadItems: PropTypes.func,
  onRateTrack: PropTypes.func,
  onSelectTrack: PropTypes.func,
}