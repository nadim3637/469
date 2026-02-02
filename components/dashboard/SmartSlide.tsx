import React from 'react';
import { Sparkles, Crown, Bell, Play } from 'lucide-react';
import { SystemSettings } from '../../types';

interface SmartSlideProps {
    settings?: SystemSettings;
    onAiTour: () => void;
    onOffers: () => void;
    onNotice: () => void;
    children?: React.ReactNode; // For BannerCarousel content
}

export const SmartSlide: React.FC<SmartSlideProps> = ({ settings, onAiTour, onOffers, onNotice, children }) => {
    return (
        <div className="space-y-6 pt-2 pb-6">
            <div className="flex items-center justify-between px-2 mb-2">
                <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                    <Sparkles size={14} /> Explore More
                </h3>
            </div>

            {/* AI TOUR BUTTON (Glowing) */}
            <button 
                onClick={onAiTour}
                className="w-full relative group overflow-hidden rounded-2xl shadow-lg animate-in slide-in-from-right duration-500"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-violet-600 animate-gradient-x"></div>
                <div className="relative p-1">
                    <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🧠</span>
                            <div className="text-left text-white">
                                <h4 className="font-black text-sm">Start AI Tour</h4>
                                <p className="text-[10px] text-fuchsia-200 font-bold uppercase tracking-wider">Interactive Guide</p>
                            </div>
                        </div>
                        <div className="bg-white/20 p-2 rounded-full animate-pulse">
                            <Play size={16} className="text-white" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </button>

            {/* BANNERS */}
            <div className="overflow-hidden rounded-2xl shadow-sm border border-slate-100 bg-white">
                {children}
            </div>

            {/* QUICK LINKS ROW */}
            <div className="grid grid-cols-2 gap-3">
                <button onClick={onOffers} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-xl border border-yellow-100 hover:bg-yellow-100 transition-colors">
                    <div className="bg-yellow-200 p-2 rounded-lg text-yellow-700"><Crown size={16} /></div>
                    <div className="text-left">
                        <p className="font-bold text-slate-800 text-xs">Premium Offers</p>
                        <p className="text-[9px] text-yellow-700 font-bold">Special Discounts</p>
                    </div>
                </button>
                <button onClick={onNotice} className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100 hover:bg-blue-100 transition-colors">
                    <div className="bg-blue-200 p-2 rounded-lg text-blue-700"><Bell size={16} /></div>
                    <div className="text-left">
                        <p className="font-bold text-slate-800 text-xs">Notice Board</p>
                        <p className="text-[9px] text-blue-700 font-bold">Latest Updates</p>
                    </div>
                </button>
            </div>
        </div>
    );
};
