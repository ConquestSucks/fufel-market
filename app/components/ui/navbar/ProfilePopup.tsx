import Image from 'next/image'

const IconWithTooltip = () => {
    return (
        <div className="relative inline-block group">
            <Image
                src='fufel-market-favicon-color.svg'
                width={35}
                height={35}
                alt=""
            />
            <div>
                <span>Вход</span>
                <span>Изменить тему</span>
            </div>
        </div>
    );
};

export default IconWithTooltip;
