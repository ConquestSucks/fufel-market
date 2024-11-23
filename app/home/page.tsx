import Link from "next/link";
import styles from './home.module.scss';

export default function HomePage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-screen bg-gray-100">
            <div className="flex flex-col items-center justify-center gap-16 h-2/5 rounded-3xl bg-accent p-8 shadow-md w-6/12 h-full">
                <span className={`${styles.text, 'text'} text-4xl text-center font-bold`}>FUFELMARKET</span>
                <Link 
                    href="/ads">
                    <div className="flex text-2xl rounded-xl border-2 border-solid border-primary p-2 transition-all duration-500 ease-in-out
                        hover:border-dashed transform hover:scale-110">
                        <div className={`${styles.magnetic} magnetic`}>
                            Explore
                        </div>
                        <div className={`${styles.static} static`}>
                            Explore
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
