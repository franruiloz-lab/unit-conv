import UnitConverter from './UnitConverter';

// Base unit: meters
const units = [
  { value: 'mm',   label: 'Millimeters (mm)',       toBase: (v: number) => v * 0.001,      fromBase: (v: number) => v / 0.001 },
  { value: 'cm',   label: 'Centimeters (cm)',        toBase: (v: number) => v * 0.01,       fromBase: (v: number) => v / 0.01 },
  { value: 'm',    label: 'Meters (m)',              toBase: (v: number) => v,              fromBase: (v: number) => v },
  { value: 'km',   label: 'Kilometers (km)',         toBase: (v: number) => v * 1000,       fromBase: (v: number) => v / 1000 },
  { value: 'in',   label: 'Inches (in)',             toBase: (v: number) => v * 0.0254,     fromBase: (v: number) => v / 0.0254 },
  { value: 'ft',   label: 'Feet (ft)',               toBase: (v: number) => v * 0.3048,     fromBase: (v: number) => v / 0.3048 },
  { value: 'yd',   label: 'Yards (yd)',              toBase: (v: number) => v * 0.9144,     fromBase: (v: number) => v / 0.9144 },
  { value: 'mi',   label: 'Miles (mi)',              toBase: (v: number) => v * 1609.344,   fromBase: (v: number) => v / 1609.344 },
  { value: 'nmi',  label: 'Nautical Miles (nmi)',    toBase: (v: number) => v * 1852,       fromBase: (v: number) => v / 1852 },
  { value: 'ly',   label: 'Light-years (ly)',        toBase: (v: number) => v * 9.461e15,   fromBase: (v: number) => v / 9.461e15 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function LengthConverter({ defaultFrom = 'm', defaultTo = 'ft' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Length Converter" decimals={6} />;
}
