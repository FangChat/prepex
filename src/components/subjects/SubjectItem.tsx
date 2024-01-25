import { Subject } from '../../utils/types';

type SubjectItemProps = {
  removeSubject: (id: string) => void;
  subject: Subject;
};

const SubjectItem = (props: SubjectItemProps) => {
  return (
    <div className='flex flex-col h-full w-full p-3 rounded-lg bg-primary border border-accent'>
      <p className='text-m font-medium text-text'>{props.subject.subject_icon} {props.subject.subject_name}</p>
      <p className='text-text-secondary mb-2'>{props.subject.subject_curriculum} {props.subject.subject_level}</p>
      <div className='flex gap-4 mt-auto'>
        <button className='bg-primary border border-accent rounded-md h-8 px-3 hover:bg-accent text-sm'>Edit</button>
        <button className='bg-primary border border-accent rounded-md h-8 px-3 hover:bg-accent text-sm' onClick={() => props.removeSubject(props.subject.subject_id)}>Remove</button>
      </div>
    </div>
  );
};

export default SubjectItem;
