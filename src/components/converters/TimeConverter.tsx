import UnitConverter from './UnitConverter';

// Base unit: seconds
const units = [
  { value: 'ns',   label: 'Nanoseconds (ns)',        toBase: (v: number) => v * 1e-9,        fromBase: (v: number) => v / 1e-9 },
  { value: 'ms',   label: 'Milliseconds (ms)',       toBase: (v: number) => v * 0.001,       fromBase: (v: number) => v / 0.001 },
  { value: 's',    label: 'Seconds (s)',             toBase: (v: number) => v,               fromBase: (v: number) => v },
  { value: 'min',  label: 'Minutes (min)',           toBase: (v: number) => v * 60,          fromBase: (v: number) => v / 60 },
  { value: 'h',    label: 'Hours (h)',               toBase: (v: number) => v * 3600,        fromBase: (v: number) => v / 3600 },
  { value: 'd',    label: 'Days (d)',                toBase: (v: number) => v * 86400,       fromBase: (v: number) => v / 86400 },
  { value: 'wk',   label: 'Weeks (wk)',              toBase: (v: number) => v * 604800,      fromBase: (v: number) => v / 604800 },
  { value: 'mo',   label: 'Months (avg 30.44 d)',    toBase: (v: number) => v * 2629800,     fromBase: (v: number) => v / 2629800 },
  { value: 'yr',   label: 'Years (365.25 d)',        toBase: (v: number) => v * 31557600,    fromBase: (v: number) => v / 31557600 },
  { value: 'dec',  label: 'Decades',                 toBase: (v: number) => v * 315576000,   fromBase: (v: number) => v / 315576000 },
  { value: 'cent', label: 'Centuries',               toBase: (v: number) => v * 3155760000,  fromBase: (v: number) => v / 3155760000 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function TimeConverter({ defaultFrom = 'h', defaultTo = 'min' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Time Converter" decimals={4} />;
}
