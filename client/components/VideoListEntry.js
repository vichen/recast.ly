var VideoListEntry = () => {
  return (
    <div className="video-list-entry">
      <div className="media-left media-middle">
        <img className="media-object" src={exampleVideoData[0].snippet.thumbnails.default.url} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title">Video Title</div>
        <div className="video-list-entry-detail">Video Description</div>
      </div>
    </div>
  );
};
window.VideoListEntry = VideoListEntry;
