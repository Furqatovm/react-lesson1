import Vitamin from "./assets/img/Vitamin.png"


const Shop =() =>{
    return <section className="max-w-[1250px] mx-auto py-[2rem] grid grid-cols-3">
        <div className="col-span-2">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[#303030] font-semibold text-[42px]">Корзина</h1>
                    <span className="text-[#ABABAB]">Очистить корзину</span>
            </div>
            <div>
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
            <div>
                <span>820 тг.</span>
                <span>410 тг./шт.</span>
            </div>
            </div>
        </div>
    </section>
}


export default Shop