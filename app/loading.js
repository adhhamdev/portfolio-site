import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[300px] w-[600px] rounded-xl bg-slate-200" />
        <div className="space-y-2 flex flex-col items-center">
          <Skeleton className="h-16 w-[325px] bg-slate-200" />
          <Skeleton className="h-16 w-[400px] bg-slate-200" />
        </div>
      </div>
    </div>
  );
};

export default loading;
