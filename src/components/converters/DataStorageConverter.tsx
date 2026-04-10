import UnitConverter from './UnitConverter';

// Base unit: bytes
const units = [
  { value: 'bit',  label: 'Bits (bit)',              toBase: (v: number) => v / 8,           fromBase: (v: number) => v * 8 },
  { value: 'b',    label: 'Bytes (B)',               toBase: (v: number) => v,               fromBase: (v: number) => v },
  { value: 'kb',   label: 'Kilobytes (KB)',          toBase: (v: number) => v * 1024,        fromBase: (v: number) => v / 1024 },
  { value: 'mb',   label: 'Megabytes (MB)',          toBase: (v: number) => v * 1048576,     fromBase: (v: number) => v / 1048576 },
  { value: 'gb',   label: 'Gigabytes (GB)',          toBase: (v: number) => v * 1073741824,  fromBase: (v: number) => v / 1073741824 },
  { value: 'tb',   label: 'Terabytes (TB)',          toBase: (v: number) => v * 1.0995e12,   fromBase: (v: number) => v / 1.0995e12 },
  { value: 'pb',   label: 'Petabytes (PB)',          toBase: (v: number) => v * 1.1259e15,   fromBase: (v: number) => v / 1.1259e15 },
  { value: 'kbit', label: 'Kilobits (kbit)',         toBase: (v: number) => v * 128,         fromBase: (v: number) => v / 128 },
  { value: 'mbit', label: 'Megabits (Mbit)',         toBase: (v: number) => v * 131072,      fromBase: (v: number) => v / 131072 },
  { value: 'gbit', label: 'Gigabits (Gbit)',         toBase: (v: number) => v * 1.342e8,     fromBase: (v: number) => v / 1.342e8 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function DataStorageConverter({ defaultFrom = 'gb', defaultTo = 'mb' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Data Storage Converter" decimals={4} />;
}
