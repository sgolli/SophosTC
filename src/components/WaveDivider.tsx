interface WaveDividerProps {
  position: 'top' | 'bottom';
  shape: 'zigzag' | 'diagonal';
  fill: string;
  height?: number;
}

const paths = {
  zigzag: 'M1280 70.35L960 21.11 320 119.6 0 70.35V140H1280V70.35z',
  diagonal: 'M0 0v140h1280L0 0z',
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
        <path d={paths[shape]} fill={fill} />
      </svg>
    </div>
  );
}
