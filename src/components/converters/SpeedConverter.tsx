import UnitConverter from './UnitConverter';

// Base unit: meters per second
const units = [
  { value: 'mps',   label: 'Meters/second (m/s)',     toBase: (v: number) => v,              fromBase: (v: number) => v },
  { value: 'kph',   label: 'Kilometers/hour (km/h)',  toBase: (v: number) => v / 3.6,        fromBase: (v: number) => v * 3.6 },
  { value: 'mph',   label: 'Miles/hour (mph)',         toBase: (v: number) => v * 0.44704,    fromBase: (v: number) => v / 0.44704 },
  { value: 'fps',   label: 'Feet/second (ft/s)',       toBase: (v: number) => v * 0.3048,     fromBase: (v: number) => v / 0.3048 },
  { value: 'knot',  label: 'Knots (kn)',               toBase: (v: number) => v * 0.514444,   fromBase: (v: number) => v / 0.514444 },
  { value: 'mach',  label: 'Mach (at sea level)',      toBase: (v: number) => v * 340.29,     fromBase: (v: number) => v / 340.29 },
  { value: 'c',     label: 'Speed of Light (c)',       toBase: (v: number) => v * 2.998e8,    fromBase: (v: number) => v / 2.998e8 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function SpeedConverter({ defaultFrom = 'kph', defaultTo = 'mph' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Speed Converter" decimals={4} />;
}
