import React from 'react'
import {useState} from 'react'
import { TimeSplit } from './typings/global'
import { tick, getTwoDaysFromNow } from './utils/time'
interface CountdownProps {
  targetDate : string
}

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({targetDate}) => {
  const DEFAULT_TARGET_DATE = getTwoDaysFromNow()
  const [timeRemaining, setTimeRemaining] = useState<TimeSplit>({
    hours : '00',
    minutes : '00',
    seconds : '00'
  })
  tick(targetDate, setTimeRemaining)
  return (
    <div>
      <h1>{ `${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}` }</h1>xx
    </div>
  )
}

Countdown.schema = {
  title: 'editor.countdown.title',
  description: 'editor.countdown.description',
  type: 'object',
  properties: {
    targetData : {
      title:'Final title',
      description : 'This is the description',
      type : 'string',
      default : 'null',
    },
  },
}

export default Countdown
