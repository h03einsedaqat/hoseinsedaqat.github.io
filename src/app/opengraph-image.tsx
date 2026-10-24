import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';
export const alt = 'Hosein Sedaqat | Full-Stack Developer Portfolio';
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
          backgroundColor: '#171717',
          color: '#ececec',
          padding: '64px 72px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '68px',
              height: '68px',
              borderRadius: '18px',
              backgroundColor: '#ececec',
              color: '#171717',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            HS
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.16)',
              backgroundColor: '#212121',
              fontSize: '20px',
              color: '#10a37f',
            }}
          >
            Conversational Developer Portfolio
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: '64px',
              fontWeight: 700,
              letterSpacing: '-1.5px',
              lineHeight: 1.1,
            }}
          >
            Hosein Sedaqat
          </div>
          <div
            style={{
              fontSize: '30px',
              color: '#b4b4b4',
              lineHeight: 1.35,
            }}
          >
            Full-Stack Developer · React, Next.js, Vue.js, TypeScript & Node.js
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.12)',
            paddingTop: '28px',
            fontSize: '22px',
            color: '#8e8e8e',
          }}
        >
          <span>hoseinsedaqat.github.io</span>
          <span>github.com/hoseinsedaqat · linkedin.com/in/hoseinsedaqat</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
