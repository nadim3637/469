import React from 'react';
import { User, SystemSettings } from '../../types';
import { Target, BrainCircuit, Play, Zap } from 'lucide-react';

interface HeroProps {
    user: User;
    dailyStudySeconds: number;
    dailyTargetSeconds: number;
    onStartStudy: (minutes: number) => void;
    onAiTutor: () => void;
    onContinueLearning: () => void;
    onDailyChallenge: () => void;
    settings?: SystemSettings;
}

export const HeroSection: React.FC<HeroProps> = ({ 
    user, dailyStudySeconds, dailyTargetSeconds, 
    onStartStudy, onAiTutor, onContinueLearning, onDailyChallenge, settings 
}) => {
    const progress = Math.min((dailyStudySeconds / dailyTargetSeconds) * 100, 100);

    const formatTime = (secs: number) => {
        const h = Math.floor(secs / 3600);
        const m = Math.floor((secs % 3600) / 60);
        return `${h}h ${m}m`;
    };

    return (
        <div className="space-y-6 animate-in slide-in-from-top-4 duration-500">
            {/* 1. STUDY TIMER CARD */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-2xl border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse"></div>
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                    <div>
                        <h2 className="text-lg font-black flex items-center gap-2">
                            <Target className="text-blue-400" size={20} />
                            Today's Focus
                        </h2>
                        <p className="text-xs text-slate-400 font-medium">Goal: {formatTime(dailyTargetSeconds)}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-mono font-bold text-white">{formatTime(dailyStudySeconds)}</p>
                        <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest animate-pulse">● Live Tracking</p>
                    </div>
                </div>

                {/* Progress Bar Line */}
                <div className="w-full bg-slate-700/50 h-2 rounded-full mb-6 overflow-hidden">
                    <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => onStartStudy(30)} className="bg-white/10 hover:bg-white/20 py-2 rounded-xl text-xs font-bold transition-all border border-white/5">30 Min</button>
                    <button onClick={() => onStartStudy(60)} className="bg-white/10 hover:bg-white/20 py-2 rounded-xl text-xs font-bold transition-all border border-white/5">1 Hour</button>
                    <button onClick={() => onStartStudy(120)} className="bg-white/10 hover:bg-white/20 py-2 rounded-xl text-xs font-bold transition-all border border-white/5">2 Hours</button>
                </div>
            </div>

            {/* 2. AI PERSONAL TUTOR (HERO) */}
            <button 
                onClick={onAiTutor}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl p-[2px] group shadow-xl hover:shadow-indigo-500/30 transition-all"
            >
                <div className="bg-white rounded-[22px] p-5 h-full relative overflow-hidden group-hover:bg-indigo-50 transition-colors">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-100 rounded-full blur-2xl -mr-8 -mt-8"></div>
                    
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <BrainCircuit size={28} />
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-black text-slate-800 leading-tight">AI Personal Tutor</h3>
                            <p className="text-xs text-slate-500 font-medium mt-1">"Ask anything – I'll teach you instantly!"</p>
                        </div>
                        <div className="ml-auto bg-indigo-600 text-white p-2 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                            <Play size={16} fill="currentColor" />
                        </div>
                    </div>
                </div>
            </button>

            {/* 3. QUICK ACTIONS GRID */}
            <div className="grid grid-cols-2 gap-4">
                <button 
                    onClick={onContinueLearning}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-300 transition-all text-left group"
                >
                    <div className="bg-blue-50 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 mb-3 group-hover:scale-110 transition-transform">
                        <Play size={20} fill="currentColor" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Continue Learning</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Resume last chapter</p>
                </button>

                <button 
                    onClick={onDailyChallenge}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:border-orange-300 transition-all text-left group"
                >
                    <div className="bg-orange-50 w-10 h-10 rounded-full flex items-center justify-center text-orange-600 mb-3 group-hover:scale-110 transition-transform">
                        <Zap size={20} fill="currentColor" />
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm">Daily Challenge</h4>
                    <p className="text-[10px] text-slate-500 mt-1">Win streaks & prizes</p>
                </button>
            </div>
        </div>
    );
};
