import SpinnerSvg from "./SpinnerSvg";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <SpinnerSvg />
    </div>
  );
};

export default LoadingSpinner;
