import logo from "./assets/img/logo.png"

const Header = () =>{
    return <header className="w-full">
        <div className="max-w-[1250px] mx-auto py-[1.5rem] flex justify-between border-b-[2px] border-[#F0F0F0]">

        <div className="w-[30%] flex justify-between items-center">
            <img src={logo} alt="" className="max-w-[99px] w-full" />
            <div className="flex flex-col">
                <span className="text-[#A7AED2] text-[14px] ">Бесплатный звонок</span>
                <span className="text-[#303030] text-[18px] font-medium">8 800 080 5011</span>
            </div>
        </div>
        <div className="flex w-[30%] bg-[#F4F5FA] py-[15px] items-center justify-center gap-[10px]  rounded-[31px]">
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M6.66669 2.16669C9.42811 2.16669 11.6667 4.40526 11.6667 7.16669C11.6667 8.30679 11.2851 9.35776 10.6427 10.1989L13.8048 13.3619C14.0651 13.6223 14.0651 14.0444 13.8048 14.3048C13.5644 14.5451 13.1863 14.5636 12.9248 14.3602L12.8619 14.3048L9.69886 11.1427C8.85776 11.7851 7.80679 12.1667 6.66669 12.1667C3.90526 12.1667 1.66669 9.92811 1.66669 7.16669C1.66669 4.40526 3.90526 2.16669 6.66669 2.16669ZM6.66669 3.50002C4.64164 3.50002 3.00002 5.14164 3.00002 7.16669C3.00002 9.19173 4.64164 10.8334 6.66669 10.8334C8.69173 10.8334 10.3334 9.19173 10.3334 7.16669C10.3334 5.14164 8.69173 3.50002 6.66669 3.50002Z" fill="#989DB5"/>
   </svg>
     <input type="search" className="outline-none text-gray-500" placeholder="Search something"/>
        </div>

        <div className="righ flex items-center justify-between w-[30%]">
            <div className="flex flex-col items-end">
                <div className="flex items-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1046 11.2549L11.3133 12.0375C10.7301 12.6099 9.9733 13.3459 9.04274 14.2456C8.46124 14.8078 7.53869 14.8077 6.95728 14.2454L4.62989 11.9815C4.33738 11.6943 4.09253 11.4521 3.8953 11.2549C1.62836 8.98792 1.62836 5.31248 3.8953 3.04554C6.16224 0.778602 9.83768 0.778602 12.1046 3.04554C14.3716 5.31248 14.3716 8.98792 12.1046 11.2549ZM9.66676 7.33333C9.66676 6.41279 8.92051 5.66653 7.99996 5.66653C7.07941 5.66653 6.33316 6.41279 6.33316 7.33333C6.33316 8.25388 7.07941 9.00013 7.99996 9.00013C8.92051 9.00013 9.66676 8.25388 9.66676 7.33333Z" fill="#46C578"/>
               </svg>
               <span className="text-[#46C578]">ЕЦ-166/4</span>
                </div>
                <a href="#" className="text-[12px] text-[#A7AED2]"> Нур-Султан</a>
               
            </div>
            <div>
                <button className="text-[#000000]   border border-[#C0C2CB] rounded-[21px] py-[8px] px-[19px]">Войти</button>
            </div>
        </div>


        </div>

    </header>
}

export default Header