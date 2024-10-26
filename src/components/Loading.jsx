import { Puff } from 'react-loader-spinner'

function Loading() {
  return (
    <div className="w-full h-screen bg-secondary flex items-center justify-center border-4 border-white">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#c4544a"
        ariaLabel="loading"
      />
    </div>
  );
}

export default Loading