// Generates on-tone placeholder thumbnails for the 4 new showcase templates.
// Outputs PNGs to public/images/templates/. Replace with real screenshots later.
import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.resolve('public/images/templates');
fs.mkdirSync(OUT, { recursive: true });

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
  ihdr[8] = 8;
  ihdr[9] = 2;
  const raw = Buffer.alloc((width * 3 + 1) * height);
  let o = 0;
  for (let y = 0; y < height; y++) {
    raw[o++] = 0;
    for (let x = 0; x < width; x++) {
      const [r, g, b] = pixelFn(x, y, width, height);
      raw[o++] = r;
      raw[o++] = g;
      raw[o++] = b;
    }
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];

// radial-ish diagonal blend from base to accent with soft banding
function tone(base, accent) {
  const [r1, g1, b1] = hex(base);
  const [r2, g2, b2] = hex(accent);
  return (x, y, w, h) => {
    const t = (x / w) * 0.6 + (y / h) * 0.4;
    const n = 0.05 * Math.sin((x * 1.3 + y) / 55) + 0.04 * Math.cos((y - x) / 70);
    const f = Math.min(1, Math.max(0, t * 0.9 + n));
    return [
      Math.round(r1 + (r2 - r1) * f),
      Math.round(g1 + (g2 - g1) * f),
      Math.round(b1 + (b2 - b1) * f),
    ];
  };
}

const jobs = [
  ['maison-noir', '#0e0e0f', '#c8a96a'],
  ['onjae', '#efe9df', '#8a7b5c'],
  ['salt-ember', '#1a1512', '#c65f3a'],
  ['studio-noon', '#0b0b0c', '#2b4bff'],
];

for (const [name, base, accent] of jobs) {
  const buf = pngRGB(1600, 1280, tone(base, accent));
  fs.writeFileSync(path.join(OUT, `${name}.png`), buf);
}

console.log('generated', jobs.length, 'template thumbnails to', OUT);
