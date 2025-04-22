import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const photoPlaceholders = Array.from({ length: 6 });

  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-5 w-80" />
        <Skeleton className="h-4 w-40" />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {["All Work", "Events", "Street", "Portrait", "Landscape"].map((tab, i) => (
          <Skeleton key={i} className="h-8 w-24 rounded-md" />
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {photoPlaceholders.map((_, i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-[300px] w-full rounded-md" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <Skeleton className="h-6 w-64" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-11/12" />
        <Skeleton className="h-4 w-10/12" />
        <Skeleton className="h-4 w-9/12" />
        <Skeleton className="h-4 w-1/2" />
      </div>

      <div className="mt-8 flex gap-4">
        <Skeleton className="h-10 w-48 rounded-md" />
        <Skeleton className="h-10 w-36 rounded-md" />
      </div>
    </div>
  );
}