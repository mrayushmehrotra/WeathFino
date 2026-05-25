const fs = require('fs');

let content = fs.readFileSync('output.jsx', 'utf-8');

// Replace inline style and class handling for pause
content = content.replace(
  "custom-marquee ${isPaused ? 'paused' : ''}`\} style={{ animationPlayState: isPaused ? 'paused' : 'running' }}",
  "custom-marquee ${isPaused ? 'is-paused' : ''}`\}"
);

// We need to make sure the structure matches what they provided:
// They provided: "Good Morning" and "Welcome to Pride Trading Consultancy Pvt Ltd" at the start, and "NIFTY 100 • 2026-05-25" at the end.
// We can just add them manually in the react code before/after the map.
const extraStart = `
            <span className="inline-flex items-center gap-2 mx-4 text-gray-200">Good Morning</span>
            <span className="inline-flex items-center gap-2 mx-4 text-gray-200">Welcome to Pride Trading Consultancy Pvt Ltd</span>
`;
const extraEnd = `
            <span className="inline-flex items-center gap-2 mx-4 text-[#c7cdd6] font-bold">NIFTY 100 • 2026-05-25</span>
`;

// Inject into the map block
content = content.replace(
  "{/* Double the list for seamless looping */}",
  "{/* Double the list for seamless looping */}\n" + extraStart
);

// But wait, the original HTML has them interleaved or just at the ends.
// If I duplicate the array, I should duplicate these static ones too!
// Actually let's just make an array of items to render.
