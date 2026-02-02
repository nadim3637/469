import React from 'react';
import { History, BarChart3, Gamepad2, CreditCard, Mail, Trophy, Gift, Award } from 'lucide-react';

interface PowerZoneProps {
    onNavigate: (tab: string) => void;
    unreadCount?: number;
    isGameEnabled?: boolean;
}

export const PowerZone: React.FC<PowerZoneProps> = ({ onNavigate, unreadCount = 0, isGameEnabled = true }) => {
    const items = [
        { id: 'HISTORY', label: 'History', icon: History, color: 'blue' },
        { id: 'ANALYTICS', label: 'Analytics', icon: BarChart3, color: 'purple' },
        { id: 'GAME', label: 'Game Zone', icon: Gamepad2, color: 'green', disabled: !isGameEnabled },
        { id: 'SUB_HISTORY', label: 'My Plan', icon: CreditCard, color: 'orange' },
        { id: 'INBOX', label: 'Inbox', icon: Mail, color: 'pink', badge: unreadCount },
        { id: 'LEADERBOARD', label: 'Ranks', icon: Trophy, color: 'yellow' },
        { id: 'REDEEM', label: 'Redeem', icon: Gift, color: 'red' },
        { id: 'PRIZES', label: 'Prizes', icon: Award, color: 'teal' },
    ];

    return (
        <div className="space-y-4 pb-8">
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest px-2">Power Zone</h3>
            <div className="grid grid-cols-4 gap-3 px-2">
                {items.filter(i => !i.disabled).map(item => (
                    <button 
                        key={item.id}
                        onClick={() => onNavigate(item.id)}
                        className="flex flex-col items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all relative"
                    >
                        <div className={`p-2.5 rounded-full bg-${item.color}-50 text-${item.color}-600`}>
                            <item.icon size={20} />
                        </div>
                        <span className="text-[10px] font-bold text-slate-600 leading-tight">{item.label}</span>
                        
                        {item.badge ? (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full shadow border-2 border-white">
                                {item.badge}
                            </span>
                        ) : null}
                    </button>
                ))}
            </div>
        </div>
    );
};
