import Link from "next/link"

export default function HomePage() {
    return (
        <div className="flex flex-col items-center">
            <span>Сайт для поиска объявлений по вашему городу</span>
            <Link href="/ads">Начать</Link>
        </div>
    )
}