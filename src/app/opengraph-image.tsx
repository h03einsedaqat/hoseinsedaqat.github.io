import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Hosein Sedaqat (حسین صداقت) — Full-Stack Developer Portfolio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#000000',
          color: '#f2f2f2',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
          border: '1px solid #262626',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '18px',
              backgroundColor: '#f2f2f2',
              color: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 700,
            }}
          >
            HS
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '20px', color: '#10a37f', fontWeight: 600 }}>
              hoseinsedaqat.github.io
            </span>
            <span style={{ fontSize: '18px', color: '#8a8a8a' }}>
              Official Portfolio &amp; Resume
            </span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ fontSize: '64px', fontWeight: 700, letterSpacing: '-0.02em' }}>
            Hosein Sedaqat
          </div>
          <div style={{ fontSize: '30px', color: '#b4b4b4', maxWidth: '940px' }}>
            Full-Stack Developer · React · Next.js · Vue.js · Node.js · TypeScript
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid #262626',
            paddingTop: '24px',
            fontSize: '20px',
            color: '#8a8a8a',
          }}
        >
          <span>5+ Years Experience · FinTech &amp; SaaS</span>
          <span>github.com/hoseinsedaqat</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
