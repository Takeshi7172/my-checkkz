import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings, Plus, Trash2, LogIn, Loader2, Save, Image as ImageIcon, Upload, Edit2, Trophy, Gift } from 'lucide-react';
import { projectId, publicAnonKey } from '/utils/supabase/info';
import { toast } from 'sonner';

export const AdminPanel = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'raffles' | 'winners'>('raffles');
  
  const [items, setItems] = useState<any[]>([]);
  const [rafflesForSelect, setRafflesForSelect] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form States
  const [raffleForm, setRaffleForm] = useState({
    title: '', titleKK: '', date: '', image: '', bg: 'bg-purple-100', isBanner: false, conditions: '', conditionsKK: ''
  });

  const [winnerForm, setWinnerForm] = useState({
    name: '', date: '', city: '', prize: '', prizeKK: '', photo: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      fetchData();
      toast.success('Авторизация успешна');
    } else {
      toast.error('Неверный логин или пароль');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = activeTab === 'raffles' ? 'raffles' : 'winners';
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/${endpoint}`, {
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });
      const data = await response.json();
      setItems(data);

      if (activeTab === 'winners') {
        const rResp = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/raffles`, {
          headers: { 'Authorization': `Bearer ${publicAnonKey}` }
        });
        const rData = await rResp.json();
        setRafflesForSelect(rData);
      }
    } catch (error) {
      toast.error('Ошибка при загрузке данных');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) fetchData();
  }, [activeTab, isAuthenticated]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formDataUpload = new FormData();
    formDataUpload.append('file', file);

    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/upload`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${publicAnonKey}` },
        body: formDataUpload
      });

      if (!response.ok) throw new Error('Upload failed');
      
      const data = await response.json();
      if (activeTab === 'raffles') {
        setRaffleForm(prev => ({ ...prev, image: data.url }));
      } else {
        setWinnerForm(prev => ({ ...prev, photo: data.url }));
      }
      toast.success('Фото загружено успешно');
    } catch (error) {
      toast.error('Ошибка при загрузке фото');
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentData = activeTab === 'raffles' ? raffleForm : winnerForm;
    const imgKey = activeTab === 'raffles' ? 'image' : 'photo';
    
    if (!(currentData as any)[imgKey]) {
      toast.error('Пожалуйста, загрузите изображение');
      return;
    }

    setSaving(true);
    try {
      const endpoint = activeTab === 'raffles' ? 'raffles' : 'winners';
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          ...currentData,
          id: editingId || `${endpoint}-${Date.now()}`
        })
      });
      
      if (response.ok) {
        toast.success(editingId ? 'Запись обновлена' : 'Запись добавлена');
        resetForm();
        fetchData();
      }
    } catch (error) {
      toast.error('Ошибка при сохранении');
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setRaffleForm({ title: '', titleKK: '', date: '', image: '', bg: 'bg-purple-100', isBanner: false, conditions: '', conditionsKK: '' });
    setWinnerForm({ name: '', date: '', city: '', prize: '', prizeKK: '', photo: '' });
    setEditingId(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleEdit = (item: any) => {
    if (activeTab === 'raffles') {
      setRaffleForm({
        title: item.title || '',
        titleKK: item.titleKK || '',
        date: item.date || '',
        image: item.image || '',
        bg: item.bg || 'bg-purple-100',
        isBanner: item.isBanner || false,
        conditions: item.conditions || '',
        conditionsKK: item.conditionsKK || ''
      });
    } else {
      setWinnerForm({
        name: item.name || '',
        date: item.date || '',
        city: item.city || '',
        prize: item.prize || '',
        prizeKK: item.prizeKK || '',
        photo: item.photo || ''
      });
    }
    setEditingId(item.id);
    document.getElementById('admin-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Вы уверены?')) return;
    
    setDeletingId(id);
    try {
      const endpoint = activeTab === 'raffles' ? 'raffles' : 'winners';
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-0613a960/server/${endpoint}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${publicAnonKey}` }
      });
      
      if (response.ok) {
        toast.success('Удалено');
        fetchData();
      }
    } catch (error) {
      toast.error('Ошибка при удалении');
    } finally {
      setDeletingId(null);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[32px] w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
      >
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FBFBFB]">
          <div className="flex items-center gap-2">
            <Settings className="text-[#8F80E2] w-5 h-5" />
            <h2 className="text-xl font-bold text-[#0f0f0f]">Панель управления MyCheck</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} className="text-[#AEAEB2]" />
          </button>
        </div>

        {!isAuthenticated ? (
          <div className="p-12 flex flex-col items-center justify-center">
            <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-4">
              <h3 className="text-center text-lg font-bold mb-4">Вход в систему</h3>
              <input 
                type="text" 
                placeholder="Логин" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8F80E2] outline-none transition-colors"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <input 
                type="password" 
                placeholder="Пароль" 
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#8F80E2] outline-none transition-colors"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="w-full py-3 bg-[#8F80E2] text-white font-bold rounded-xl hover:bg-[#7a6bc9] transition-colors flex items-center justify-center gap-2">
                <LogIn size={18} /> Войти
              </button>
            </form>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            <div className="flex bg-gray-100 p-1 rounded-xl">
              <button 
                onClick={() => { setActiveTab('raffles'); resetForm(); }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'raffles' ? 'bg-white text-[#8F80E2] shadow-sm' : 'text-gray-500'}`}
              >
                <Gift size={16} /> Розыгрыши
              </button>
              <button 
                onClick={() => { setActiveTab('winners'); resetForm(); }}
                className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${activeTab === 'winners' ? 'bg-white text-[#8F80E2] shadow-sm' : 'text-gray-500'}`}
              >
                <Trophy size={16} /> Победители
              </button>
            </div>

            <section id="admin-form" className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="font-bold flex items-center gap-2 text-[#8F80E2] mb-4">
                {editingId ? <Edit2 size={18} /> : <Plus size={18} />} 
                {editingId ? 'Редактировать' : 'Добавить'} {activeTab === 'raffles' ? 'акцию' : 'победителя'}
              </h3>
              
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTab === 'raffles' ? (
                  <>
                    <input placeholder="Заголовок (RU)" className="px-4 py-2 rounded-lg border border-gray-200" required value={raffleForm.title} onChange={e => setRaffleForm({...raffleForm, title: e.target.value})} />
                    <input placeholder="Заголовок (KZ)" className="px-4 py-2 rounded-lg border border-gray-200" required value={raffleForm.titleKK} onChange={e => setRaffleForm({...raffleForm, titleKK: e.target.value})} />
                    <input placeholder="Ср��ки (напр: 01.01 — 31.03)" className="col-span-1 md:col-span-2 px-4 py-2 rounded-lg border border-gray-200" required value={raffleForm.date} onChange={e => setRaffleForm({...raffleForm, date: e.target.value})} />
                    <div className="col-span-1 md:col-span-2 space-y-2">
                      <textarea placeholder="Условия участия (RU) - каждый пункт с новой строки" className="w-full px-4 py-2 rounded-lg border border-gray-200 min-h-[60px] text-sm" value={raffleForm.conditions} onChange={e => setRaffleForm({...raffleForm, conditions: e.target.value})} />
                      <textarea placeholder="Условия участия (KZ) - каждый пункт с новой строки" className="w-full px-4 py-2 rounded-lg border border-gray-200 min-h-[60px] text-sm" value={raffleForm.conditionsKK} onChange={e => setRaffleForm({...raffleForm, conditionsKK: e.target.value})} />
                    </div>
                    <select className="px-4 py-2 rounded-lg border border-gray-200" value={raffleForm.bg} onChange={e => setRaffleForm({...raffleForm, bg: e.target.value})}>
                      <option value="bg-purple-100">Фиолетовый фон</option>
                      <option value="bg-orange-100">Оранжевый фон</option>
                      <option value="bg-green-100">Зеленый фон</option>
                    </select>
                    <label className="flex items-center gap-2 cursor-pointer text-sm">
                      <input type="checkbox" checked={raffleForm.isBanner} onChange={e => setRaffleForm({...raffleForm, isBanner: e.target.checked})} /> Баннер
                    </label>
                  </>
                ) : (
                  <>
                    <input placeholder="Имя победителя" className="px-4 py-2 rounded-lg border border-gray-200" required value={winnerForm.name} onChange={e => setWinnerForm({...winnerForm, name: e.target.value})} />
                    <input placeholder="Дата выигрыша" className="px-4 py-2 rounded-lg border border-gray-200" required value={winnerForm.date} onChange={e => setWinnerForm({...winnerForm, date: e.target.value})} />
                    <input placeholder="Город" className="px-4 py-2 rounded-lg border border-gray-200" required value={winnerForm.city} onChange={e => setWinnerForm({...winnerForm, city: e.target.value})} />
                    <div className="flex flex-col gap-2">
                      <input 
                        list="raffle-suggestions"
                        placeholder="Приз (RU)" 
                        className="px-4 py-2 rounded-lg border border-gray-200" 
                        required 
                        value={winnerForm.prize} 
                        onChange={e => setWinnerForm({...winnerForm, prize: e.target.value})} 
                      />
                      <input 
                        placeholder="Приз (KZ)" 
                        className="px-4 py-2 rounded-lg border border-gray-200" 
                        required 
                        value={winnerForm.prizeKK} 
                        onChange={e => setWinnerForm({...winnerForm, prizeKK: e.target.value})} 
                      />
                      <datalist id="raffle-suggestions">
                        {rafflesForSelect.map(r => <option key={r.id} value={r.title} />)}
                      </datalist>
                    </div>
                  </>
                )}

                <div className="col-span-1 md:col-span-2">
                   <div 
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${(activeTab === 'raffles' ? raffleForm.image : winnerForm.photo) ? 'border-green-200 bg-green-50' : 'border-gray-200 hover:border-[#8F80E2] bg-white'}`}
                   >
                     <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileUpload} />
                     {uploading ? <Loader2 className="animate-spin text-[#8F80E2]" /> : (activeTab === 'raffles' ? raffleForm.image : winnerForm.photo) ? (
                       <div className="flex items-center gap-3 w-full">
                         <img src={activeTab === 'raffles' ? raffleForm.image : winnerForm.photo} alt="Preview" className="w-12 h-12 rounded-lg object-cover" />
                         <span className="text-xs text-green-600 font-medium truncate flex-grow">Фото загружено</span>
                         <button type="button" onClick={(e) => { e.stopPropagation(); activeTab === 'raffles' ? setRaffleForm(p => ({...p, image:''})) : setWinnerForm(p => ({...p, photo:''})); }} className="text-red-400"><Trash2 size={16} /></button>
                       </div>
                     ) : <><Upload size={24} className="text-gray-300" /><span className="text-xs text-gray-500">Загрузить фото</span></>}
                   </div>
                </div>

                <button type="submit" disabled={saving || uploading} className="md:col-span-2 py-3 bg-[#8F80E2] text-white font-bold rounded-xl disabled:opacity-50 flex items-center justify-center gap-2">
                  {saving ? <Loader2 className="animate-spin" /> : <Save size={18} />} {editingId ? 'Обновить' : 'Сохранить'}
                </button>
              </form>
            </section>

            <section>
              <h3 className="font-bold mb-4">Все записи ({items.length})</h3>
              <div className="space-y-3">
                {loading ? (
                  <div className="flex justify-center p-8"><Loader2 className="animate-spin text-[#8F80E2]" /></div>
                ) : (
                  items.map((item: any) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-white border border-gray-100 rounded-xl shadow-sm group">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center overflow-hidden border border-gray-100`}>
                          <img src={activeTab === 'raffles' ? item.image : item.photo} className="w-full h-full object-cover" alt="" />
                        </div>
                        <div>
                          <p className="font-bold text-sm leading-none">
                            {activeTab === 'raffles' ? item.title : item.name}
                          </p>
                          <p className="text-[10px] text-[#AEAEB2] mt-1">
                            {item.date} {activeTab === 'winners' && `• ${item.city}`}
                          </p>
                          {activeTab === 'winners' && item.prize && (
                            <p className="text-[10px] text-[#8F80E2] font-medium mt-0.5">
                              {item.prize}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleEdit(item)} className="p-2 text-blue-400 hover:bg-blue-50 rounded-lg"><Edit2 size={16} /></button>
                        <button onClick={() => handleDelete(item.id)} disabled={deletingId === item.id} className="p-2 text-red-300 hover:text-red-500 hover:bg-red-50 rounded-lg">
                          {deletingId === item.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 size={16} />}
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>
        )}
      </motion.div>
    </div>
  );
};
