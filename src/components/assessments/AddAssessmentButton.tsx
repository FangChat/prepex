import { PlusIcon } from '@heroicons/react/24/outline';

type AddAssessmentButtonProps = {
  openModal: () => void;
};

const AddAssessmentButton = (props: AddAssessmentButtonProps) => {
  return (
    <div className='flex items-center justify-center min-h-28 h-full w-full rounded-lg bg-white border border-zinc-200 hover:bg-zinc-200 hover:cursor-pointer' onClick={props.openModal}>
      <p className='text-zinc-500 '><PlusIcon className='w-6 h-6' /></p>
    </div>
  );
};

export default AddAssessmentButton;