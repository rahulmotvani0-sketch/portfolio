import { ImageResponse } from 'next/og';

// Route segment config
export const dynamic = 'force-static';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0B0F19', // The app's dark blue background
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#06b6d4', // cyan-500 from the app's palette
          fontWeight: 'bold',
          borderRadius: '20%', // slightly rounded
          border: '2px solid #1e293b',
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
