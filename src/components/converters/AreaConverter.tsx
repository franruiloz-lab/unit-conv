import UnitConverter from './UnitConverter';

// Base unit: square meters
const units = [
  { value: 'mm2',  label: 'Sq. Millimeters (mm²)',   toBase: (v: number) => v * 1e-6,        fromBase: (v: number) => v / 1e-6 },
  { value: 'cm2',  label: 'Sq. Centimeters (cm²)',   toBase: (v: number) => v * 1e-4,        fromBase: (v: number) => v / 1e-4 },
  { value: 'm2',   label: 'Sq. Meters (m²)',         toBase: (v: number) => v,               fromBase: (v: number) => v },
  { value: 'km2',  label: 'Sq. Kilometers (km²)',    toBase: (v: number) => v * 1e6,         fromBase: (v: number) => v / 1e6 },
  { value: 'ha',   label: 'Hectares (ha)',            toBase: (v: number) => v * 10000,       fromBase: (v: number) => v / 10000 },
  { value: 'ac',   label: 'Acres (ac)',               toBase: (v: number) => v * 4046.856,    fromBase: (v: number) => v / 4046.856 },
  { value: 'in2',  label: 'Sq. Inches (in²)',         toBase: (v: number) => v * 0.00064516,  fromBase: (v: number) => v / 0.00064516 },
  { value: 'ft2',  label: 'Sq. Feet (ft²)',           toBase: (v: number) => v * 0.092903,    fromBase: (v: number) => v / 0.092903 },
  { value: 'yd2',  label: 'Sq. Yards (yd²)',          toBase: (v: number) => v * 0.836127,    fromBase: (v: number) => v / 0.836127 },
  { value: 'mi2',  label: 'Sq. Miles (mi²)',          toBase: (v: number) => v * 2589988,     fromBase: (v: number) => v / 2589988 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function AreaConverter({ defaultFrom = 'm2', defaultTo = 'ft2' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Area Converter" decimals={4} />;
}
