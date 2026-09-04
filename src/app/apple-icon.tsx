import { ImageResponse } from 'next/og';

// Route segment config
export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 100,
          background: '#0B0F19', // The app's dark blue background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#06b6d4', // cyan-500 from the app's palette
          fontWeight: 'bold',
          borderRadius: '20%', // slightly rounded
        }}
      >
        R
      </div>
    ),
    {
      ...size,
    }
  );
}
