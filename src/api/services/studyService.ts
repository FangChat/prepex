import StudyTracking from '../models/StudyTracking'
import { convertTimeToMins } from '../utils/helpers';

export const setupStudyTrackerForSubject = async (tracker_id: string, hours: number, minutes: number) => {
  await StudyTracking.findOneAndUpdate({ tracker_id }, { is_setup: true, time_allocated: convertTimeToMins(hours, minutes) })
  const tracker = await StudyTracking.findOne({ tracker_id })
  return tracker;
}

export const editStudyTrackerTimeForSubject = async (tracker_id: string, hours: number, minutes: number) => {
  await StudyTracking.findOneAndUpdate({ tracker_id }, { time_allocated: convertTimeToMins(hours, minutes) })
  const tracker = await StudyTracking.findOne({ tracker_id })
  return tracker;
}

export const removeStudyTrackerForSubject = async (tracker_id: string) => {
  await StudyTracking.findOneAndUpdate({ tracker_id }, { is_setup: false, time_allocated: 0, time_studied: 0, completed: false })
  const tracker = await StudyTracking.findOne({ tracker_id })
  return tracker;
}