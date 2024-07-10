import { GeneratePodcastProps } from '@/types'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader } from 'lucide-react'

const GeneratePodcast = ({
   setAudioStorageId,
   setAudio,
   voiceType,
   audio,
   voicePrompt,
   setVoicePrompt,
   setAudioDuration,
}: GeneratePodcastProps) => {
  const [isGenerating, setisGenerating] = useState(false)
  return (
    <div>
      <div className='flex flex-col gap-2.5'>
        <Label className='text-16 font-bold text-white-1'>
        AI import to Generate Podcast
        </Label>
       <Textarea
       className='input-class font-light focus-visible:ring-offset-orange-1'
       placeholder='Provide Text to generate Audio'
       rows={5}
       value={voicePrompt}
       onChange={(e) => setVoicePrompt}
       />
      </div>
      <div className="mt-5 w-full max-w-[200px]">
      <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
                  {isGenerating ? (
                    <>
                      Submitting
                      <Loader size={20} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Generate'
                  )}
                </Button>
      </div>
    </div>
  )
}

export default GeneratePodcast