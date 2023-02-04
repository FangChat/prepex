import { NextPage } from 'next';
import Sidebar from '../../components/sidebar/Sidebar';
import SubjectInfo from '../../components/subjects/SubjectInfo';
import SubjectInfoAdd from '../../components/subjects/SubjectInfoAdd';
import StudyLog from '../../components/log/StudyLog';
import AddSubjectModal from '../../components/modal/AddSubjectModal';
import { useState } from 'react';

const Subjects: NextPage = () => {

  const [modalToggled, setModalToggled] = useState(false);

  return (
    <div className='container h-screen'>
      <Sidebar />
      <div className='ml-72 h-full w-5/6 p-4 mb-2'>
        <p className='text-4xl font-semibold mb-4'>Subjects</p>
        <div className='flex flex-row gap-12 mt-2 w-full min-h-full pb-10'>
          <div className='bg-white border border-zinc-200 rounded-lg p-4'>
            <h1 className='font-semibold mb-4'>Subjects</h1>
            <div className='grid grid-cols-2 grid-flow-row gap-4'>
              <SubjectInfo icon='💼' name='Business Studies' description='Gain a solid foundation of business knowledge, including finance, marketing, human resources and more.' />
              <SubjectInfo icon='📉' name='Maths' description='Study critical thinking and problem solving through algebra, geometry, trigonometry and more.' />
              <SubjectInfo icon='🚀' name='Physics' description='Learn mechanics, waves, electricity, magnetism and other fundamental physics concepts.' />
              <SubjectInfo icon='🧪' name='Chemistry' description='Study the structure and behavior of atoms, molecules, reactions, elements, and compounds.' />
              <SubjectInfo icon='💻' name='Computer Science' description='Study algorithms, database design, programming and computer systems.' />
              <SubjectInfo icon='📚' name='English' description='Improve communication skills through reading, writing, speaking, and comprehension of the language.' />
              <SubjectInfoAdd openModal={() => setModalToggled(true)} />
            </div>
          </div>
          <StudyLog />
        </div>
        {modalToggled && <AddSubjectModal close={() => setModalToggled(false)} />}
      </div>
    </div>
  )
}

export default Subjects;