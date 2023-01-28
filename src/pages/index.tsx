import type { NextPage } from 'next'
import Sidebar from '../components/sidebar/Sidebar'
import Subject from '../components/subjects/Subject'
import SubjectAdd from '../components/subjects/SubjectAdd'
import Exams from '../components/exams/Exams'
import Calendar from '../components/calendar/Calendar'

const Dashboard: NextPage = () => {
  return (
    <div className='container h-screen w-full'>
      <Sidebar />
      <div className='p-4 ml-64 h-full w-2/4'>
        <span className='text-4xl font-semibold'>Dashboard</span>
        <div className='flex flex-row items-center h-full w-full'>
          <div className='flex flex-col gap-12 w-full'>
            <div className='grid grid-rows-3 grid-flow-col gap-4'>
              <Subject name={'Business Studies'} />
              <Subject name={'Physics'} />
              <Subject name={'Maths'} />
              <Subject name={'Computer Science'} />
              <Subject name={'English'} />
              <SubjectAdd />
            </div>
            <Exams />
          </div>
          <Calendar />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
