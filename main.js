const ffmpeg = require('fluent-ffmpeg');

// YouTube RTMP URL and Stream Key
// rtmp://a.rtmp.youtube.com/live2
// 1a71-sh5b-d8ez-r5v9-ee4j
const streamUrl = 'rtmp://a.rtmp.youtube.com/live2/1a71-sh5b-d8ez-r5v9-ee4j';
const videoPath = './strm.mp4';  // Local video file path

function strml(){
ffmpeg(videoPath)
  .inputFormat('mp4')
  .videoCodec('libx264')
  .audioCodec('aac')
  .format('flv')
  .outputOptions('-f', 'flv') // Set the output format for streaming
  .output(streamUrl)
  .on('start', commandLine => {
    console.log('FFmpeg command:', commandLine);
  })
  .on('error', err => {
    console.error('Error:', err);
  })
  .on('end', () => {
    console.log('Streaming ended.');
    strml();
  })
  .run();
}
strml();
