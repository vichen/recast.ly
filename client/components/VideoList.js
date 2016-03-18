var VideoList = () => {
  return (
    <div className="video-list media">
      {exampleVideoData.map(aVideo =>
        <VideoListEntry aVideo={aVideo} />
      )}
    </div>
  );
};
window.VideoList = VideoList;


//       <VideoListEntry videoData={['first']}/>
      // <VideoListEntry />
      // <VideoListEntry />
      // <VideoListEntry />
      // <VideoListEntry />
      // <VideoListEntry />
      // <VideoListEntry />
      // <VideoListEntry />
      // <VideoListEntry />
