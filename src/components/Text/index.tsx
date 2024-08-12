type Props = {
  children: string;
};

const Text = ({ children }: Props) => {
  return <div className='bg-sky-500 aspect-square'>{children}</div>;
};

export default Text;
