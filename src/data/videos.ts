// Local video files for the homepage's video story row. Paths are kept flat
// and explicit so they're easy to swap.
//
// v2.mp4, v3.mov, and V4.mp4–V10.mp4 are encoded with HEVC (H.265) video —
// confirmed via ffprobe. Chrome has no HEVC video decoder, so it silently
// plays the AAC audio track while showing no video frame (this is what
// "audio plays, video is blank" looked like). It was not a CSS/layout issue
// and not specific to the .mov container — v2 has the exact same problem
// despite already being an .mp4.
//
// v2-web.mp4, v3-web.mp4, and v4-web.mp4–v10-web.mp4 are H.264 (High
// profile) + AAC re-encodes of those files, generated with ffmpeg and
// confirmed Chrome-compatible. The originals (v2.mp4, v3.mov, V4.mp4–
// V10.mp4) are left untouched in this folder exactly as uploaded — only the
// *-web.mp4 files are referenced below for playback.
//
// v1.mp4 was already H.264 (no codec-compatibility problem), but at 281MB
// — around 15-20x every other video here — it was slow enough to download
// that it could occupy one of the browser's few concurrent per-origin
// connections for minutes, queuing other same-origin requests (other
// images on the page) behind it. v1-web.mp4 is the same re-encode
// treatment as the others (same duration/content, scaled + compressed,
// ~18MB) so it behaves like every other video here instead of being an
// outlier. v1.mp4 is left untouched and still present, same as the other
// originals.

export type VideoStoryItem = {
  id: number;
  src: string;
  type: string;
};

export const videoStories: VideoStoryItem[] = [
  { id: 1, src: "/images/video/v1-web.mp4", type: "video/mp4" },
  { id: 2, src: "/images/video/v2-web.mp4", type: "video/mp4" },
  { id: 3, src: "/images/video/v3-web.mp4", type: "video/mp4" },
  { id: 4, src: "/images/video/v4-web.mp4", type: "video/mp4" },
  { id: 5, src: "/images/video/v5-web.mp4", type: "video/mp4" },
  { id: 6, src: "/images/video/v6-web.mp4", type: "video/mp4" },
  { id: 7, src: "/images/video/v7-web.mp4", type: "video/mp4" },
  { id: 8, src: "/images/video/v8-web.mp4", type: "video/mp4" },
  { id: 9, src: "/images/video/v9-web.mp4", type: "video/mp4" },
  { id: 10, src: "/images/video/v10-web.mp4", type: "video/mp4" },
];
