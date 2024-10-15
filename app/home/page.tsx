import Link from "next/link";

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center gap-16 h-2/5 rounded-3xl bg-accent p-8 shadow-md">
                <span className="text-4xl text-center font-bold">Сайт для поиска объявлений по вашему городу</span>
                <Link 
                    className="text-2xl rounded-xl border-2 border-solid border-primary p-2 transition-all duration-500 ease-in-out hover:border-dashed transform hover:scale-110"
                    href="/ads">
                    Начать
                </Link>
            </div>
        </div>
    );
}
