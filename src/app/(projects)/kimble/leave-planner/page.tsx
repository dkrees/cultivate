
export default function LeavePlannerPage() {
  return (
    <div className="flex justify-between px-6 py-2">
      <div className="flex justify-start gap-4">
        <button type="button" className="bg-white border border-gray-400 rounded px-4 py-2 hover:bg-gray-200 active:translate-y-0.5">Filters</button>
        <button type="button" className="bg-white border border-gray-400 rounded px-4 py-2 hover:bg-gray-200 active:translate-y-0.5">Clear All</button>
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="bg-white border border-gray-400 rounded px-4 py-2 hover:bg-gray-200 active:translate-y-0.5">Saved Views</button>
        <button type="button" className="bg-white border border-gray-400 rounded px-4 py-2 hover:bg-gray-200 active:translate-y-0.5">Export</button>
      </div>
    </div>
  )
}

