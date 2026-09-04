import { ImageResponse } from 'next/og';

// Route segment config
export const dynamic = 'force-static';

// Image metadata
export const alt = 'Rahul Motvani | DevOps & Cloud Infrastructure Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom right, #0B0F19, #111827, #0f172a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('https://rahul.techiking.com/grid.svg')",
            opacity: 0.3,
          }}
        />
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
          <div style={{
            fontSize: 72,
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #22d3ee, #818cf8)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}>
            Rahul Motvani
          </div>
          
          <div style={{
            fontSize: 42,
            color: '#cbd5e1',
            marginBottom: 40,
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: 1.4,
          }}>
            DevOps, DevSecOps & SRE Engineer
          </div>

          <div style={{
            display: 'flex',
            gap: '24px',
            marginTop: '40px',
          }}>
            {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'CI/CD'].map((skill) => (
              <div key={skill} style={{
                background: 'rgba(30, 41, 59, 0.7)',
                border: '1px solid #334155',
                padding: '12px 24px',
                borderRadius: '999px',
                fontSize: 24,
                color: '#94a3b8',
              }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
