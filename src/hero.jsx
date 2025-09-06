import car from "./assets/img/car.png"
import osh from "./assets/img/osh.png"
import candy from "./assets/img/candy.png"
import foiz from "./assets/img/percentage.png"
import ananas from "./assets/img/ananas.png";
import { preconnect } from "react-dom";



const Hero =() =>{
    return <section>
        <div className="max-w-[1250px] mx-auto pt-[1rem] pb-[10px] grid grid-cols-6 gap h-[70vh]">
           <div className="col-span-2 bg-[#46C578] p-[2rem] py-[3rem] rounded-l-[14px] flex flex-col justify-between h-full">
           <div className="flex flex-col gap-[20px]">
           <h1 className="text-[2rem] font-bold leading-[100%] text-white">Всегда свежие молочные продукты</h1>
           <p className="text-[#FFFFFFBF] text-[18px]">Только качественные товары, за которыми мы всегда следим</p>
           </div>
            <div>
                <button className="text-[18px]  text-white py-[1rem] px-[40px] rounded-[10px] border-[1.5px] border-[#FFFFFF]">Подробнее</button>
            </div>
           </div>
           <div className="col-span-4 bg-[#DEDEDE] flex items-center justify-center">
            <div className="w-full">
            <img src={car} className="h-full w-full" alt="" />
            </div>
           </div>
        </div>


        <div className="max-w-[1250px] mx-auto py-[1rem]  grid grid-cols-9 gap-[20px]">
            <div className="p-[27px] bg-gradient-to-r from-[#FA6A6A] to-[#E43F3F] rounded-[12px] col-span-3  flex flex-col justify-between h-full justify-center">
                <img src={osh} className="max-w-[250px] w-full" alt="" />
               <div>
               <h3 className="text-[#FFFFFF] font-bold text-[1.5rem] mt-[1rem]">Горячие блюда</h3>
               <p className="text-[18px] text-[#FFFFFFBF]">Вкуснейшие блюда из 4 ресторанов</p>
               </div>
            </div>

            <div className="p-[27px] bg-gradient-to-r from-[#A8CBFF] to-[#7BB0FF] rounded-[12px] col-span-2">
                <img src={candy} className="max-w-[200px] w-full" alt="" />
                <h3 className="text-[#FFFFFF] font-bold text-[1.5rem] mt-[1rem]">Новинки</h3>
                <p className="text-[18px] text-[#FFFFFFBF]">Новые позиции</p>
            </div>

            <div className="p-[27px] bg-gradient-to-r from-[#BBB0FF] to-[#8470FF] rounded-[12px] col-span-2">
                <img src={foiz} className="max-w-[250px] w-full" alt="" />
                <h3 className="text-[#FFFFFF] font-bold text-[1.5rem] mt-[1rem]">Акции</h3>
                <p className="text-[18px] text-[#FFFFFFBF]">Лучшие цены</p>
            </div>

            <div className="p-[27px] bg-gradient-to-r from-[#FFD37D] to-[#FDC352] rounded-[12px] col-span-2">
                <img src={ananas} className="max-w-[250px] w-full" alt="" />
                <h3 className="text-[#FFFFFF] font-bold text-[1.5rem] mt-[1rem]">Комплекты</h3>
                <p className="text-[18px] text-[#FFFFFFBF]">Все в одном</p>
            </div>

        </div>
        
    </section>
}


export default Hero