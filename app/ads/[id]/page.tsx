'use client'
import { adStore } from "@/app/store/ad.store";
import { userStore } from "@/app/store/user.store";
import { observer } from "mobx-react-lite";
import Image from "next/image";
import { useEffect } from "react";

const AdPage = observer(({ params }: { params: { id: string } }) =>{
    useEffect(()=> {
        adStore.loadAdById(Number(params.id));
        
    }, [params.id])

    const ad = adStore.ad

    if (adStore.loading) {
        return <div>
            Загрузка
        </div>
    }

    if (!ad) {
        return <div>Объявление не найдено</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center gap-2 w-full">
            <div className="w-8/12 border-2 shadow-xs rounded-xl p-7">
                <div className="flex w-full">
                    <span>{ad.category}</span>
                </div>
                <div className="flex w-full justify-between">
                    <div>
                        <div className="flex items-center pt-2">
                            <span className="font-black text-4xl">{ad.name}</span>
                        </div>
                        <Image src={ad.image? ad.image: '/fufel-market-favicon-white.svg'} width={400} height={400} alt=""/>
                        <div className="flex flex-col gap-2 my-3">
                            <span className="font-bold text-2xl">Адрес</span>
                            <span>{ad.city}</span>
                        </div>
                        <div className="flex flex-col gap-2 my-3">
                            <span className="font-bold text-2xl">Описание</span>
                            <span>{ad.description}</span>
                        </div>
                        <div className="flex justify-end my-3">
                            <span className="text-xs italic">Просмотры: {ad.views}</span>
                        </div>
                        <div className="flex justify-center w-full">
                            <button className="border-2 rounded-xl p-2">Пожаловаться на объявление</button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5 items-center">
                            <span className="text-4xl font-bold">{ad.price} ₽</span>
                            <button className="text-2xl font-semibold border-2 rounded-xl p-2">В избранное</button>
                        </div>
                        <div className="flex gap-2 w-full justify-between">
                            <button className="bg-secondary p-2 rounded-xl font-bold w-3/6">{ad.user.phone}</button>
                            <button className="bg-secondary p-2 rounded-xl font-bold w-3/6">Написать</button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="font-extrabold text-xl">{ad.user.name}</span>
                                <div className="flex gap-2">
                                    <span className="font-semibold">Рейтинг</span>
                                    <span className="font-bold">15 отзывов</span>
                                </div>
                            </div>
                            <Image src='/fufel-market-favicon-white.svg' width={50} height={50} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
})

export default AdPage;
