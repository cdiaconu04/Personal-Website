import Landui from '../images/projectpics/landui.png'
import EldiEcomStore from '../images/projectpics/eldiecomstore.png'
import YoutubeDownloader from '../images/projectpics/youtubedownloader.png'
import GuessRealorAI from '../images/projectpics/guessRealOrAI.png'
import EasySpeech from '../images/projectpics/EasySpeech.png'
import JobMax from '../images/projectpics/JobMax.png'

export const projects = [
    {
        image: JobMax,
        title: "JobMax",
        subtitle: "Resume Management Platform",
        bullets: [
            "Store resumes, get AI feedback tailored to each job description",
            // "Scores users and provides feedback on their tone, eye-contact, response quality, etc",
        ],
        techs: ["React.js", "Express.js", "Supabase"],
        githubUrl: "https://github.com/cdiaconu04/JobMax",
        // liveUrl: "https://easyspeech.vercel.app/",
    },
    //     title: "Guess Real or AI",

    {
        image: EasySpeech,
        title: "EasySpeech",
        subtitle: "AI Speaking-Coach",
        bullets: [
            "Users can practice their speaking skills in mock scenarios",
            // "Scores users and provides feedback on their tone, eye-contact, response quality, etc",
        ],
        techs: ["Next.js", "TypeScript"],
        githubUrl: "https://github.com/JohnCassavetes/teknikly-nexhacks",
        liveUrl: "https://easyspeech.vercel.app/",
    },
    {
        image: Landui,
        title: "LandUI",
        subtitle: "React Component Library",
        bullets: [
            "16 customizable react components to make your next website with",
            // "Detailed documentation and examples to help you get started quickly",
        ],
        techs: ["Next.js", "TypeScript"],
        githubUrl: "https://github.com/cdiaconu04/Land-UI",
        liveUrl: "https://land-ui-cd.vercel.app/",
    },
    {
        image: EldiEcomStore,
        title: "Eldi Store",
        subtitle: "Ecom store",
        bullets: [
            "Modern ecom platform for Eldi's leather products",
        ],
        techs: ["Next.js", "Javascript", "Stripe"],
        githubUrl: "https://github.com/cdiaconu04/Eldi-Ecom-Store",
    },
    // {
    //     image: GuessRealorAI,
    //     title: "Guess Real or AI",
    //     subtitle: "Web Game",
    //     bullets: [
    //         "Guess if the person is real or AI generated",
    //     ],
    //     techs: ["Next.js", "Typescript"],
    //     githubUrl: "https://github.com/cdiaconu04/Guess-Real-Or-AI",
    //     liveUrl: "https://guess-real-or-ai.vercel.app/",
    // },
    // {
    //     image: YoutubeDownloader,
    //     title: "Youtube Downloader",
    //     subtitle: "Video downloader",
    //     bullets: [
    //         "Download videos from youtube for free",
    //     ],
    //     techs: ["Next.js", "Javascript"],
    //     githubUrl: "https://github.com/cdiaconu04/Youtube-Downloader",
    // },
]
