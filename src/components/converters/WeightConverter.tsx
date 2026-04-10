import UnitConverter from './UnitConverter';

// Base unit: grams
const units = [
  { value: 'mg',   label: 'Milligrams (mg)',         toBase: (v: number) => v * 0.001,      fromBase: (v: number) => v / 0.001 },
  { value: 'g',    label: 'Grams (g)',               toBase: (v: number) => v,              fromBase: (v: number) => v },
  { value: 'kg',   label: 'Kilograms (kg)',          toBase: (v: number) => v * 1000,       fromBase: (v: number) => v / 1000 },
  { value: 't',    label: 'Metric Tons (t)',         toBase: (v: number) => v * 1e6,        fromBase: (v: number) => v / 1e6 },
  { value: 'oz',   label: 'Ounces (oz)',             toBase: (v: number) => v * 28.3495,    fromBase: (v: number) => v / 28.3495 },
  { value: 'lb',   label: 'Pounds (lb)',             toBase: (v: number) => v * 453.592,    fromBase: (v: number) => v / 453.592 },
  { value: 'st',   label: 'Stones (st)',             toBase: (v: number) => v * 6350.29,    fromBase: (v: number) => v / 6350.29 },
  { value: 'ton',  label: 'Short Tons (US ton)',     toBase: (v: number) => v * 907185,     fromBase: (v: number) => v / 907185 },
  { value: 'lton', label: 'Long Tons (UK ton)',      toBase: (v: number) => v * 1016047,    fromBase: (v: number) => v / 1016047 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function WeightConverter({ defaultFrom = 'kg', defaultTo = 'lb' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Weight & Mass Converter" decimals={4} />;
}
