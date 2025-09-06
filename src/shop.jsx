import Vitamin from "./assets/img/Vitamin.png"


const Shop =() =>{
    return <section className="max-w-[1250px] mx-auto py-[2rem] grid grid-cols-3">
        <div className="col-span-2">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[#303030] font-semibold text-[42px]">Корзина</h1>
                    <span className="text-[#ABABAB]">Очистить корзину</span>
            </div>
            <div className="flex justify-between items-start py-[2rem]">
                <img src={Vitamin} className="max-w-[79px] w-full" alt="" />
                <div className="flex flex-col">
                    <span className="text-[#303030] text-[18px]">M&M’s шоколадные конфеты
                    130гр </span>
                    <span className="text-[14px] text-[#ABABAB]">Осталось: 2 шт.</span>
                </div>
            <button className="text-white text-[15px] py-[7px] px-[26.5px] bg-transparent border-[1.5px] border-[#46C578] rounded-[10px] flex gap-[20px]">
               <span className="text-[20px] text-[#46C578]">-</span>
               <span className="text-[20px] text-[#303030]">1</span>
               <span className="text-[20px] text-[#46C578]">+</span>
            </button>
            <div className="flex flex-col gap-[1rem]">
                <span className="text-[#303030] text-[1.5rem]">820 тг.</span>
                <span className="text-[#ABABAB] text-[14px]">410 тг./шт.</span>
            </div>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2473 10.5289L23.3345 10.6066C23.6972 10.9693 23.7231 11.5411 23.4122 11.9336L23.3345 12.0209L18.3848 16.9706L23.3345 21.9203C23.6972 22.283 23.7231 22.8548 23.4122 23.2473L23.3345 23.3346C22.9719 23.6972 22.4001 23.7231 22.0075 23.4123L21.9203 23.3346L16.9706 18.3848L12.0208 23.3346C11.6582 23.6972 11.0864 23.7231 10.6938 23.4123L10.6066 23.3346C10.244 22.9719 10.2181 22.4001 10.5289 22.0076L10.6066 21.9203L15.5564 16.9706L10.6066 12.0209C10.244 11.6582 10.2181 11.0864 10.5289 10.6939L10.6066 10.6066C10.9692 10.244 11.5411 10.2181 11.9336 10.5289L12.0208 10.6066L16.9706 15.5564L21.9203 10.6066C22.283 10.244 22.8548 10.2181 23.2473 10.5289L23.3345 10.6066L23.2473 10.5289Z" fill="#ABABAB"/>
                </svg>
            </div>

            <div className="flex justify-between items-start py-[2rem] border-t border-gray-400">
                <img src={Vitamin} className="max-w-[79px] w-full" alt="" />
                <div className="flex flex-col">
                    <span className="text-[#303030] text-[18px]">M&M’s шоколадные конфеты
                    130гр </span>
                    <span className="text-[14px] text-[#ABABAB]">Осталось: 2 шт.</span>
                </div>
            <button className="text-white text-[15px] py-[7px] px-[26.5px] bg-transparent border-[1.5px] border-[#46C578] rounded-[10px] flex gap-[20px]">
               <span className="text-[20px] text-[#46C578]">-</span>
               <span className="text-[20px] text-[#303030]">1</span>
               <span className="text-[20px] text-[#46C578]">+</span>
            </button>
            <div className="flex flex-col gap-[1rem]">
                <span className="text-[#303030] text-[1.5rem]">820 тг.</span>
                <span className="text-[#ABABAB] text-[14px]">410 тг./шт.</span>
            </div>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2473 10.5289L23.3345 10.6066C23.6972 10.9693 23.7231 11.5411 23.4122 11.9336L23.3345 12.0209L18.3848 16.9706L23.3345 21.9203C23.6972 22.283 23.7231 22.8548 23.4122 23.2473L23.3345 23.3346C22.9719 23.6972 22.4001 23.7231 22.0075 23.4123L21.9203 23.3346L16.9706 18.3848L12.0208 23.3346C11.6582 23.6972 11.0864 23.7231 10.6938 23.4123L10.6066 23.3346C10.244 22.9719 10.2181 22.4001 10.5289 22.0076L10.6066 21.9203L15.5564 16.9706L10.6066 12.0209C10.244 11.6582 10.2181 11.0864 10.5289 10.6939L10.6066 10.6066C10.9692 10.244 11.5411 10.2181 11.9336 10.5289L12.0208 10.6066L16.9706 15.5564L21.9203 10.6066C22.283 10.244 22.8548 10.2181 23.2473 10.5289L23.3345 10.6066L23.2473 10.5289Z" fill="#ABABAB"/>
                </svg>
            </div>

            <div className="flex justify-between items-start py-[2rem] border-t border-gray-400">
                <img src={Vitamin} className="max-w-[79px] w-full" alt="" />
                <div className="flex flex-col">
                    <span className="text-[#303030] text-[18px]">M&M’s шоколадные конфеты
                    130гр </span>
                    <span className="text-[14px] text-[#ABABAB]">Осталось: 2 шт.</span>
                </div>
            <button className="text-white text-[15px] py-[7px] px-[26.5px] bg-transparent border-[1.5px] border-[#46C578] rounded-[10px] flex gap-[20px]">
               <span className="text-[20px] text-[#46C578]">-</span>
               <span className="text-[20px] text-[#303030]">1</span>
               <span className="text-[20px] text-[#46C578]">+</span>
            </button>
            <div className="flex flex-col gap-[1rem]">
                <span className="text-[#303030] text-[1.5rem]">820 тг.</span>
                <span className="text-[#ABABAB] text-[14px]">410 тг./шт.</span>
            </div>
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.2473 10.5289L23.3345 10.6066C23.6972 10.9693 23.7231 11.5411 23.4122 11.9336L23.3345 12.0209L18.3848 16.9706L23.3345 21.9203C23.6972 22.283 23.7231 22.8548 23.4122 23.2473L23.3345 23.3346C22.9719 23.6972 22.4001 23.7231 22.0075 23.4123L21.9203 23.3346L16.9706 18.3848L12.0208 23.3346C11.6582 23.6972 11.0864 23.7231 10.6938 23.4123L10.6066 23.3346C10.244 22.9719 10.2181 22.4001 10.5289 22.0076L10.6066 21.9203L15.5564 16.9706L10.6066 12.0209C10.244 11.6582 10.2181 11.0864 10.5289 10.6939L10.6066 10.6066C10.9692 10.244 11.5411 10.2181 11.9336 10.5289L12.0208 10.6066L16.9706 15.5564L21.9203 10.6066C22.283 10.244 22.8548 10.2181 23.2473 10.5289L23.3345 10.6066L23.2473 10.5289Z" fill="#ABABAB"/>
                </svg>
            </div>

            
        </div>
    </section>
}


export default Shop