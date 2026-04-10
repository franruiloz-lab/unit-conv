import { useState, useCallback } from 'react';

export interface Unit {
  value: string;
  label: string;
  toBase: (v: number) => number;
  fromBase: (v: number) => number;
}

interface Props {
  units: Unit[];
  defaultFrom: string;
  defaultTo: string;
  title: string;
  decimals?: number;
}

function fmt(n: number, decimals: number): string {
  if (!isFinite(n)) return '—';
  if (Math.abs(n) >= 1e9) return n.toExponential(4);
  const fixed = parseFloat(n.toFixed(decimals));
  return fixed.toLocaleString('en-US', { maximumFractionDigits: decimals });
}

export default function UnitConverter({ units, defaultFrom, defaultTo, title, decimals = 6 }: Props) {
  const [inputVal, setInputVal] = useState('1');
  const [fromUnit, setFromUnit] = useState(defaultFrom);
  const [toUnit, setToUnit] = useState(defaultTo);
  const [copied, setCopied] = useState(false);

  const convert = useCallback((val: string, from: string, to: string): string => {
    const num = parseFloat(val);
    if (isNaN(num) || val === '') return '';
    const fromU = units.find(u => u.value === from);
    const toU = units.find(u => u.value === to);
    if (!fromU || !toU) return '';
    const base = fromU.toBase(num);
    const result = toU.fromBase(base);
    return fmt(result, decimals);
  }, [units, decimals]);

  const result = convert(inputVal, fromUnit, toUnit);

  const fromLabel = units.find(u => u.value === fromUnit)?.label ?? fromUnit;
  const toLabel = units.find(u => u.value === toUnit)?.label ?? toUnit;

  function swap() {
    const oldFrom = fromUnit;
    const oldTo = toUnit;
    setFromUnit(oldTo);
    setToUnit(oldFrom);
  }

  function copy() {
    if (!result) return;
    navigator.clipboard.writeText(result).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }

  // All conversions table
  const num = parseFloat(inputVal);
  const allRows = isNaN(num) ? [] : units.map(u => {
    const fromU = units.find(x => x.value === fromUnit);
    if (!fromU) return null;
    const base = fromU.toBase(num);
    const converted = u.fromBase(base);
    return { label: u.label, value: fmt(converted, decimals), isActive: u.value === toUnit };
  }).filter(Boolean);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-brand-600 to-brand-700 px-6 py-4">
        <h2 className="text-white font-bold text-lg">{title}</h2>
        <p className="text-brand-100 text-sm mt-0.5">Enter a value and select units to convert</p>
      </div>

      <div className="p-6 space-y-5">
        {/* Input row */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end">
          {/* From */}
          <div>
            <label className="calc-label">From</label>
            <div className="flex gap-2">
              <input
                type="number"
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                className="calc-input flex-1 min-w-0 text-lg font-bold"
                placeholder="Enter value"
                step="any"
              />
            </div>
            <select
              value={fromUnit}
              onChange={e => setFromUnit(e.target.value)}
              className="calc-select mt-2"
            >
              {units.map(u => (
                <option key={u.value} value={u.value}>{u.label}</option>
              ))}
            </select>
          </div>

          {/* Swap button */}
          <div className="flex justify-center pb-1">
            <button
              onClick={swap}
              className="w-10 h-10 rounded-full bg-brand-50 border border-brand-200 hover:bg-brand-100 flex items-center justify-center transition-colors group"
              title="Swap units"
            >
              <svg className="w-5 h-5 text-brand-600 group-hover:rotate-180 transition-transform duration-300"
                   viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16V4m0 0L3 8m4-4l4 4"/>
                <path d="M17 8v12m0 0l4-4m-4 4l-4-4"/>
              </svg>
            </button>
          </div>

          {/* To */}
          <div>
            <label className="calc-label">To</label>
            <div className="flex gap-2">
              <div className="calc-input flex-1 text-lg font-bold text-brand-700 bg-brand-50 border-brand-200 cursor-default select-all">
                {result || '—'}
              </div>
              <button
                onClick={copy}
                className="px-3 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-semibold transition-colors flex-shrink-0"
              >
                {copied ? '✓' : 'Copy'}
              </button>
            </div>
            <select
              value={toUnit}
              onChange={e => setToUnit(e.target.value)}
              className="calc-select mt-2"
            >
              {units.map(u => (
                <option key={u.value} value={u.value}>{u.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Result summary */}
        {result && (
          <div className="result-card">
            <div className="text-brand-200 text-xs font-semibold uppercase tracking-wider mb-1">Result</div>
            <div className="text-2xl font-extrabold text-white">
              {inputVal} <span className="text-brand-300">{fromLabel}</span>
            </div>
            <div className="text-slate-300 text-sm mt-1">= <span className="text-brand-300 font-bold text-xl">{result}</span> {toLabel}</div>
          </div>
        )}

        {/* Full conversion table */}
        {allRows.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-navy-900 mb-3 flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              {inputVal} {fromLabel} in all units
            </h3>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody className="divide-y divide-slate-100">
                  {allRows.map((row, i) => (
                    <tr key={i} className={row!.isActive ? 'bg-brand-50' : i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-2.5 font-medium text-navy-700">{row!.label}</td>
                      <td className={`px-4 py-2.5 text-right font-mono font-semibold ${row!.isActive ? 'text-brand-700' : 'text-navy-900'}`}>
                        {row!.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
