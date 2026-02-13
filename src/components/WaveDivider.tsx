interface WaveDividerProps {
  position: 'top' | 'bottom';
  shape: 'zigzag' | 'diagonal';
  fill: string;
  height?: number;
}

const paths = {
  zigzag: {
    top: 'M1280 0H0V70.35L320 21.11 960 119.6 1280 70.35V0z',
    bottom: 'M0 70.35L320 21.11 960 119.6 1280 70.35V140H0V70.35z',
  },
  diagonal: {
    top: 'M1280 0v140H0L1280 0z',
    bottom: 'M1280 0v140H0L1280 0z',
  },
};

export default function WaveDivider({ position, shape, fill, height = 90 }: WaveDividerProps) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        [position === 'top' ? 'top' : 'bottom']: 0,
        height: `${height}px`,
        lineHeight: 0,
        overflow: 'hidden',
        zIndex: 1,
      }}
    >
      <svg
        viewBox="0 0 1280 140"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path d={paths[shape][position]} fill={fill} />
      </svg>
    </div>
  );
}
