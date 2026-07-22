import { ChevronRight } from 'lucide-react';

const ExperienceCard = ({ title, company, dateRange, bullets = [], techs = [] }) => {
    return (
        <div className="rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-800/20 transition duration-200
            2xl:p-8 xl:p-7 lg:p-6 md:p-5 p-4
            flex flex-col gap-6 h-full w-full
        ">
            <div className="flex flex-row items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                    <h3 className="text-gray-900 dark:text-white font-bold transition duration-200
                        2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg text-base
                    ">
                        {title}
                    </h3>
                    <p className="text-green-600 dark:text-green-500 font-medium transition duration-200
                        xl:text-base lg:text-sm text-sm
                    ">
                        {company}
                    </p>
                </div>

                <span className="shrink-0 rounded-md border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-mono transition duration-200
                    2xl:text-sm xl:text-sm text-xs
                    px-3 py-1.5
                ">
                    {dateRange}
                </span>
            </div>

            <ul className="flex flex-col gap-2">
                {bullets.map((bullet, index) => (
                    <li key={index} className="flex flex-row items-start gap-2 text-gray-700 dark:text-gray-300 transition duration-200
                        xl:text-base lg:text-sm text-xs
                    ">
                        <ChevronRight className="text-green-500 shrink-0 mt-1" width={14} height={14}/>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>

            <div className="border-t border-gray-200 dark:border-white/10"></div>

            <div className="flex flex-row flex-wrap gap-2">
                {techs.map((tech, index) => (
                    <span key={index} className="rounded-md border border-green-600/40 dark:border-green-500/40 text-green-700 dark:text-green-400 font-mono transition duration-200
                        2xl:text-sm xl:text-sm text-xs
                        px-2 py-1
                    ">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard;
