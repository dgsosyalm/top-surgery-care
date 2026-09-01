// Local video files for the homepage's video story row. Paths are kept flat
// and explicit so they're easy to swap.
//
// v2.mp4 and v3.mov are encoded with HEVC (H.265) video — confirmed via
// ffprobe. Chrome has no HEVC video decoder, so it silently plays the AAC
// audio track while showing no video frame (this is what "audio plays,
// video is blank" looked like). It was not a CSS/layout issue and not
// specific to the .mov container — v2 has the exact same problem despite
// already being an .mp4.
//
// v2-web.mp4 / v3-web.mp4 are H.264 (High profile) + AAC re-encodes of
// those two files, generated with ffmpeg and confirmed Chrome-compatible.
// The originals (v2.mp4, v3.mov) are left untouched in this folder — only
// the *-web.mp4 files are referenced below for playback.

export type VideoStoryItem = {
  id: number;
  src: string;
  type: string;
};

export const videoStories: VideoStoryItem[] = [
  { id: 1, src: "/images/video/v1.mp4", type: "video/mp4" },
  { id: 2, src: "/images/video/v2-web.mp4", type: "video/mp4" },
  { id: 3, src: "/images/video/v3-web.mp4", type: "video/mp4" },
];
