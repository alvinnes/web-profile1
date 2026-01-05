import { Spinner } from "./spinner";

interface ModalLoadingProps {
  submitted: boolean;
}

const ModalLoading = ({ submitted }: ModalLoadingProps) => {
  return (
    <div
      className={`${submitted ? "visible top-15 opacity-100" : "invisible top-10 opacity-0"} fixed left-1/2 z-1000 flex w-[425px] -translate-x-1/2 items-center gap-3 rounded-xl bg-[#333] px-6 py-4 text-white outline-1 outline-white transition-all duration-400`}
    >
      <Spinner className="size-5" />
      <p>Loading</p>
    </div>
  );
};

export default ModalLoading;
