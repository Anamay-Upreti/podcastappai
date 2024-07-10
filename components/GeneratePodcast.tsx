import { GeneratePodcastProps } from '@/types'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { Textarea } from './ui/textarea'

const GeneratePodcast = ({
  setAudioStorageId
  setAudio
  voiceType
  audio
  voicePrompt
  setVoicePrompt
  setAudioDuration
}: GeneratePodcastProps) => {
  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <Label className='text-16 font-bold text-white-1'>
        AI import to Generate Podcast
        </Label>
       <Textarea
       className='input-class font-light focus-visible:ring-orange-1'
       />
      </div>
    </div>
  )
}

export default GeneratePodcast