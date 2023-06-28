'use client'

import { OnlyDesktop } from '~/components/ui/viewport'

import { useNoteMainContainerHeight } from './NoteMainContainer'
import { NoteTimeline } from './NoteTimeline'
import { NoteTopicInfo } from './NoteTopicInfo'

export const NoteLeftSidebar: Component = ({ className }) => {
  return (
    <OnlyDesktop>
      <AutoHeightOptimize className={className}>
        <div className="sticky top-[120px] mt-[120px] min-h-[300px]">
          <NoteTimeline />

          <NoteTopicInfo />
        </div>
      </AutoHeightOptimize>
    </OnlyDesktop>
  )
}

const AutoHeightOptimize: Component = ({ children }) => {
  const mainContainerHeight = useNoteMainContainerHeight()
  return (
    <div
      style={{
        height: mainContainerHeight ? `${mainContainerHeight}px` : 'auto',
      }}
    >
      {children}
    </div>
  )
}
