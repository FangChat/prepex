import PastPaperOverviewItem from './PastPaperOverviewItem';

const PastPaperOverview = () => {
  return (
    <div className='container flex flex-col h-2/5 w-full p-4 rounded-lg bg-white border border-zinc-200'>
      <h1 className='font-semibold mb-4'>Past papers</h1>
      <ul className='grid'>
        <PastPaperOverviewItem icon='💼' name='Bussiness Studies' progress={0} total={144} />
        <PastPaperOverviewItem icon='💻' name='Computer Science' progress={0} total={144} />
        <PastPaperOverviewItem icon='🚀' name='Physics' progress={0} total={144} />
        <PastPaperOverviewItem icon='📚' name='English' progress={0} total={144} />
        <PastPaperOverviewItem icon='📉' name='Mathematics' progress={0} total={144} />
      </ul>
    </div>
  );
};

export default PastPaperOverview;