
"use client";

import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

export default function Card({
  id,
  category,
  date,
  title,
  description,
}: {
  id: number;
  category?: string;
  date?: string;
  title?: string;
  description?: string;
}) {
    return(
      <Link href={`/posts/${id}`} className="block">
        <div className="p-4 @container hover:bg-white dark:hover:bg-slate-900/50 rounded-xl transition-colors group cursor-pointer">
<div className="flex flex-col items-stretch justify-start rounded-lg @xl:flex-row @xl:items-start">
<div
  className="w-full @xl:w-1/3 bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-slate-200 dark:bg-slate-800 border border-slate-100 dark:border-slate-800"
  data-alt="Abstract minimal geometric pattern in greyscale"
  style={{
    backgroundImage:
      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAszNpfDryPiVQh6_SjTyypwl1c2PlMN4K3VnWQ6qB-yxV9p4mftR9ayc38KGaQ8ngg1er-zW4pVnaHmDoHcPlMd1C40KsM2Amw9lgsHmvYu2DsXbHihAiyJocrwLBiSowonT-YkJF2qK22-OTHikf1AcasbADjHWkTAvxVhdPRlNSyVqelD-hXelvuOdceudnqZv8jnLDGNBEs0Sjxa04jDwrsHJnYIbA3R39UKPrcj8XcjU3b1Yq49q8ECIXIWhw_J07FypVnlvU")',
  }}
>
</div>
<div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-2 py-4 @xl:py-0 @xl:px-8">
<div className="flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
<span>{category}</span>
<span className="text-slate-300">•</span>
<span className="text-[#4c739a] dark:text-slate-500">{date}</span>
</div>
<p className="text-[#0d141b] dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em] group-hover:text-primary transition-colors">
                                        {title}
                                    </p>
<p className="text-[#4c739a] dark:text-slate-400 text-base font-normal leading-relaxed line-clamp-2">
                                       {description}
                                    </p>
<div className="pt-2">
<button className="flex items-center gap-1 text-primary text-sm font-bold leading-normal hover:underline">
<span>Read more</span>
<span className="material-symbols-outlined text-sm">{<ArrowDownRight/>}</span>
</button>
</div>
</div>
</div>
</div>
      </Link>
    )
}