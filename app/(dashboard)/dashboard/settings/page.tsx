import { PageHeader } from '@/modules/admin/components/PageHeader';
import { Save } from 'lucide-react';

export default function SettingsAdminPage() {
  return (
    <div className="space-y-6">
      <PageHeader 
        title="Admin Settings" 
        description="Configure your dashboard and database parameters."
      />

      <div className="max-w-2xl space-y-8">
        <section className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/50 space-y-6">
          <h2 className="text-xl font-bold">General Configuration</h2>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Site Name</label>
              <input 
                type="text" 
                defaultValue="Easyio Technologies"
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-600 transition-all"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Maintenance Mode</label>
              <div className="flex items-center gap-4">
                <button className="h-10 px-6 rounded-lg bg-zinc-800 text-zinc-400 text-sm font-bold border border-zinc-700">Offline</button>
                <button className="h-10 px-6 rounded-lg bg-emerald-500/10 text-emerald-500 text-sm font-bold border border-emerald-500/20">Online</button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800">
            <button className="btn-primary !h-11 !px-8 flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </section>

        <section className="p-8 rounded-2xl border border-rose-500/10 bg-rose-500/5 space-y-4">
          <h2 className="text-xl font-bold text-rose-500">Danger Zone</h2>
          <p className="text-zinc-500 text-sm">Destructive actions that cannot be reversed.</p>
          <button className="px-6 py-2 bg-rose-500 text-white font-bold rounded-lg hover:bg-rose-600 transition-colors text-sm">
            Wipe DB Cache
          </button>
        </section>
      </div>
    </div>
  );
}
