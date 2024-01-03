"use client"

import {Maximize, Minimize} from 'lucide-react'
import Hint from '@/components/hint'

interface FullScreenControlProps {
    isFullscreen: boolean
    onToggle: () => void
}

export function FullScreenControl ({isFullscreen, onToggle}: FullScreenControlProps) {
    
    const Icon = isFullscreen ? Minimize : Maximize
    const label = isFullscreen ? "Exit fullscreen": "Enter fullscreen"

    return (
        <div className='flex items-center justify-center gap-4'>
            <Hint label={label} asChild >
                <button onClick={onToggle} className='text-white p-1.5 hover:bg-white/10'>
                    <Icon className='h-5 w-5 ' />
                </button>
            </Hint>
        </div>
    )
}