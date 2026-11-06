# Joseph O. — Portfolio

Personal portfolio website built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **D3.js**. Features an exact replica of the [Bklit Studio Radial Chart](https://bklit.com/studio?s=v1.NrAMBoCICcEMBMCWsA2BaAxgC1tALpALrjABMAnAOxRxKoB0KApgOZMB28RhQA) for visualizing merge activity.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view.

## 🎯 Features

- **Exact Bklit Studio Radial Chart** — 96 × 15-min bins, ghost yesterday data, scrubber tooltips, animated center stat flow
- **Glass UI Design System** — Dark theme, backdrop blur, hover lift animations
- **Zero Horizontal Overflow** — Responsive down to 320px
- **Accessibility** — Skip links, semantic HTML, ARIA labels
- **Performance** — ResizeObserver, efficient D3 rendering, lazy SVG hydration

## 📁 Project Structure

```
portfolio-app/
├── public/
│   └── images/
│       └── headshot.png          # Your photo (add this)
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind + glass utilities
│   │   ├── layout.tsx            # Fonts, metadata, HTML
│   │   └── page.tsx              # Hero + chart + footer
│   ├── components/
│   │   └── charts/
│   │       └── RadialChart.tsx   # Full Bklit implementation
│   └── next-env.d.ts             # TypeScript declarations
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🔧 Configuration

### Tailwind Colors
CSS variables in `globals.css`:
```css
--chart-1: 217 91% 60%;    /* Merged - Blue */
--chart-2: 142 76% 36%;    /* Ready - Green */
--chart-3: 38 92% 50%;     /* Draft - Amber */
--chart-positive: 142 76% 36%;
--chart-negative: 0 84% 60%;
```

### Radial Chart Props
```tsx
interface SeriesConfig {
  dataKey: "merged" | "ready" | "draft";
  label: string;
  color: string;           // CSS var like "var(--chart-1)"
  rampFrom?: number;
  emphasize?: boolean;
}
```

## 📊 Chart Data Format

96 objects (15-min bins from 00:00 to 23:45):

```json
{
  "time": "14:15",
  "merged": 928,
  "ready": 71,
  "draft": 0,
  "yesterday": 911,
  "yesterdayMerged": 877
}
```

Future bins (after "now") have `null` for today's values — ghost dots render from `yesterday`.

## 🖼️ Add Your Headshot

Place `headshot.png` at:
```
public/images/headshot.png
```

Recommended: 512×512px, transparent background, centered face.

## 📝 License

MIT — Built for Joseph O.'s personal portfolio.