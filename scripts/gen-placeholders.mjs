// One-off generator for neutral, on-brand placeholder images (template build).
// Produces simple diagonal-gradient PNGs; caller converts to .jpg via `sips`.
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

const OUT = process.argv[2] || '/tmp/ph';
fs.mkdirSync(OUT, { recursive: true });

// CRC32
const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return (buf) => {
    let c = 0xffffffff;
    for (let i = 0; i < buf.length; i++) c = t[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
    return (c ^ 0xffffffff) >>> 0;
  };
})();

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(CRC(td), 0);
  return Buffer.concat([len, td, crc]);
}

function pngRGB(width, height, pixelFn) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type RGB
  const raw = Buffer.alloc((width * 3 + 1) * height);
  let o = 0;
  for (let y = 0; y < height; y++) {
    raw[o++] = 0; // filter: none
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelFn(x, y, width, height);
      raw[o++] = r;
      raw[o++] = g;
      raw[o++] = b;
    }
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([
    sig,
    chunk('IHDR', ihdr),
    chunk('IDAT', idat),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const hex = (h) => [
  parseInt(h.slice(1, 3), 16),
  parseInt(h.slice(3, 5), 16),
  parseInt(h.slice(5, 7), 16),
];

// On-brand sand/ink palette gradient pairs (top-left -> bottom-right).
function gradient(c1, c2) {
  const [r1, g1, b1] = hex(c1);
  const [r2, g2, b2] = hex(c2);
  return (x, y, w, h) => {
    const t = (x / w + y / h) / 2;
    // subtle diagonal banding for a soft "photo" feel
    const n = 0.04 * Math.sin((x + y) / 40);
    const f = Math.min(1, Math.max(0, t + n));
    return [
      Math.round(r1 + (r2 - r1) * f),
      Math.round(g1 + (g2 - g1) * f),
      Math.round(b1 + (b2 - b1) * f),
    ];
  };
}

// palette pairs picked from the sand scale for gentle variation
const PAIRS = [
  ['#f5efe6', '#c2a478'],
  ['#ebe0cf', '#a88759'],
  ['#d9c6a7', '#6f5637'],
  ['#fbf8f4', '#d9c6a7'],
  ['#c2a478', '#53402a'],
  ['#ebe0cf', '#8c6e45'],
  ['#f5efe6', '#a88759'],
];

const jobs = [
  ['hero', 1920, 1200, 0],
  ['about', 1200, 1500, 3],
  ['double-1', 1200, 900, 0],
  ['double-2', 1200, 900, 1],
  ['double-3', 1200, 900, 2],
  ['double-4', 1200, 900, 3],
  ['double-5', 1200, 900, 4],
  ['double-6', 1200, 900, 5],
  ['double-7', 1200, 900, 6],
  ['twin-1', 1200, 900, 1],
  ['twin-2', 1200, 900, 2],
  ['twin-3', 1200, 900, 3],
  ['twin-4', 1200, 900, 4],
  ['twin-5', 1200, 900, 5],
  ['twin-6', 1200, 900, 0],
];

for (const [name, w, h, pi] of jobs) {
  const [c1, c2] = PAIRS[pi % PAIRS.length];
  const buf = pngRGB(w, h, gradient(c1, c2));
  fs.writeFileSync(path.join(OUT, `${name}.png`), buf);
}

// Favicon / app icon — solid sand square with darker ink border feel
const icon = pngRGB(512, 512, (x, y) => {
  const cx = 256, cy = 256;
  const d = Math.hypot(x - cx, y - cy) / 360;
  const f = Math.min(1, d);
  const [r1, g1, b1] = hex('#c2a478');
  const [r2, g2, b2] = hex('#53402a');
  return [
    Math.round(r1 + (r2 - r1) * f),
    Math.round(g1 + (g2 - g1) * f),
    Math.round(b1 + (b2 - b1) * f),
  ];
});
fs.writeFileSync(path.join(OUT, 'icon.png'), icon);

console.log('generated', jobs.length + 1, 'images to', OUT);
