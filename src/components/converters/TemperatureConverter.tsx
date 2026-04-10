import UnitConverter from './UnitConverter';

// Base unit: Celsius
const units = [
  {
    value: 'c',
    label: 'Celsius (°C)',
    toBase: (v: number) => v,
    fromBase: (v: number) => v,
  },
  {
    value: 'f',
    label: 'Fahrenheit (°F)',
    toBase: (v: number) => (v - 32) * 5 / 9,
    fromBase: (v: number) => (v * 9 / 5) + 32,
  },
  {
    value: 'k',
    label: 'Kelvin (K)',
    toBase: (v: number) => v - 273.15,
    fromBase: (v: number) => v + 273.15,
  },
  {
    value: 'r',
    label: 'Rankine (°R)',
    toBase: (v: number) => (v - 491.67) * 5 / 9,
    fromBase: (v: number) => (v + 273.15) * 9 / 5,
  },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function TemperatureConverter({ defaultFrom = 'c', defaultTo = 'f' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Temperature Converter" decimals={2} />;
}
