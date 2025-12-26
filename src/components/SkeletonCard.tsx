import { Skeleton } from "./ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex items-center flex-col w-full sm:w-100 gap-4 space-x-4">
      <Skeleton className="sm:h-55 h-35 xss:h-40 w-full " />
      <div className="space-y-2 w-full">
        <Skeleton className="h-5 w-11/12 -ml-2" />
        <Skeleton className="h-5 w-9/12 -ml-2" />
      </div>
    </div>
  );
};

export default SkeletonCard;
