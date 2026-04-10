import UnitConverter from './UnitConverter';

// Base unit: liters
const units = [
  { value: 'ml',   label: 'Milliliters (ml)',        toBase: (v: number) => v * 0.001,       fromBase: (v: number) => v / 0.001 },
  { value: 'cl',   label: 'Centiliters (cl)',        toBase: (v: number) => v * 0.01,        fromBase: (v: number) => v / 0.01 },
  { value: 'l',    label: 'Liters (L)',              toBase: (v: number) => v,               fromBase: (v: number) => v },
  { value: 'm3',   label: 'Cubic Meters (m³)',       toBase: (v: number) => v * 1000,        fromBase: (v: number) => v / 1000 },
  { value: 'cm3',  label: 'Cubic Centimeters (cm³)', toBase: (v: number) => v * 0.001,       fromBase: (v: number) => v / 0.001 },
  { value: 'in3',  label: 'Cubic Inches (in³)',      toBase: (v: number) => v * 0.016387,    fromBase: (v: number) => v / 0.016387 },
  { value: 'ft3',  label: 'Cubic Feet (ft³)',        toBase: (v: number) => v * 28.3168,     fromBase: (v: number) => v / 28.3168 },
  { value: 'gal',  label: 'Gallons (US gal)',        toBase: (v: number) => v * 3.78541,     fromBase: (v: number) => v / 3.78541 },
  { value: 'gal_uk', label: 'Gallons (UK gal)',      toBase: (v: number) => v * 4.54609,     fromBase: (v: number) => v / 4.54609 },
  { value: 'qt',   label: 'Quarts (US qt)',          toBase: (v: number) => v * 0.946353,    fromBase: (v: number) => v / 0.946353 },
  { value: 'pt',   label: 'Pints (US pt)',           toBase: (v: number) => v * 0.473176,    fromBase: (v: number) => v / 0.473176 },
  { value: 'cup',  label: 'Cups (US cup)',           toBase: (v: number) => v * 0.236588,    fromBase: (v: number) => v / 0.236588 },
  { value: 'floz', label: 'Fluid Ounces (fl oz)',    toBase: (v: number) => v * 0.0295735,   fromBase: (v: number) => v / 0.0295735 },
  { value: 'tbsp', label: 'Tablespoons (tbsp)',      toBase: (v: number) => v * 0.0147868,   fromBase: (v: number) => v / 0.0147868 },
  { value: 'tsp',  label: 'Teaspoons (tsp)',         toBase: (v: number) => v * 0.00492892,  fromBase: (v: number) => v / 0.00492892 },
];

interface Props { defaultFrom?: string; defaultTo?: string; }

export default function VolumeConverter({ defaultFrom = 'l', defaultTo = 'gal' }: Props) {
  return <UnitConverter units={units} defaultFrom={defaultFrom} defaultTo={defaultTo} title="Volume Converter" decimals={4} />;
}
