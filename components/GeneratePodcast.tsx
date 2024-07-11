import { GeneratePodcastProps } from '@/types'
import { Label } from '@radix-ui/react-label'
import React, { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Loader } from 'lucide-react'

const useGeneratePodcast = (props: GeneratePodcastProps) => {
  

  return {
    isGenerating: false,
    GeneratePodcast: () => {}
  }
}

const GeneratePodcast =  (props:
  GeneratePodcastProps) => {
  
  const { isGenerating, GeneratePodcast } =  useGeneratePodcast (props);
  
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
       value={props.voicePrompt}
       onChange={(e) => props.setVoicePrompt(e.target.value)}
       />
      </div>
      <div className="mt-5 w-full max-w-[200px]">
      <Button type="submit" className="text-16  bg-orange-1 py-4 font-bold text-white-1 ">
                  {isGenerating ? (
                    <>
                      Generating
                      <Loader size={20} className="animate-spin ml-2" />
                    </>
                  ) : (
                    'Generate'
                  )}
                </Button>
      </div>
      {props.audio && (
        <audio
        controls
        src={props.audio}
        autoPlay
        className='mt-5'
        onLoadedMetadata={(e) => props.setAudioDuration(e.currentTarget.duration)
        }
        />

      )}
    </div>
  )
}

export default GeneratePodcast