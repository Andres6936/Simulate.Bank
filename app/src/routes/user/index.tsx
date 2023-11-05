import {component$} from "@builder.io/qwik";

export default component$(() => {
    return (
        <section class="relative w-screen h-screen flex flex-col">
            <section class="py-6 px-6 bg-[#F7F6F1] border-b border-b-[#CCCCCC99]">
                <h1 class="text-3xl font-bold">Banking</h1>
            </section>

            <section class="flex flex-col flex-1 px-6 py-6 bg-[#F1F0ED]">
                <div class="flex flex-col items-center justify-center pb-12">
                    <span class="text-5xl font-bold font-sans">$0.00</span>
                    <p class="text-xl font-light font-sans pt-3">Cash Balance</p>
                </div>

                <div class="flex flex-row gap-6 justify-between items-center pb-6">
                    <button
                        class="flex flex-1 items-center justify-center bg-white text-black rounded py-2 font-bold shadow">Add
                        Cash
                    </button>
                    <button
                        class="flex flex-1 items-center justify-center bg-white text-black rounded py-2 font-bold shadow">Cash
                        Out
                    </button>
                </div>

                <div class="flex flex-row gap-6 justify-between items-center pb-6 border-b border-b-[#CCCCCC99]">
                    <div class="flex flex-1 flex-row gap-4">
                        <div class="flex min-w-[3rem]">
                            <div class="bg-white min-h-[1rem] aspect-square rounded-full"></div>
                        </div>

                        <div class="flex flex-col">
                            <span class="font-bold">048 039 23</span>
                            <p class="text-xs font-sans">Routing</p>
                        </div>
                    </div>

                    <div class="flex flex-1 flex-row gap-4">
                        <div class="flex min-w-[3rem]">
                            <div class="bg-white min-h-[1rem] aspect-square rounded-full"></div>
                        </div>

                        <div class="flex flex-col">
                            <span class="font-bold">85 **** ****</span>
                            <p class="text-xs font-sans">Amount</p>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col pt-6 gap-3 font-sans">
                    <button class="flex flex-1 bg-white text-black py-3 pl-4 rounded-lg font-semibold shadow-sm">Deposits and Transfers</button>
                    <button class="flex flex-1 bg-white text-black py-3 pl-4 rounded-lg font-semibold shadow-sm">Bitcoin</button>
                    <button class="flex flex-1 bg-white text-black py-3 pl-4 rounded-lg font-semibold shadow-sm">Limits</button>
                    <button class="flex flex-1 bg-white text-black py-3 pl-4 rounded-lg font-semibold shadow-sm">Link Bank</button>
                </div>
            </section>

            <nav class="absolute bottom-0 left-0 right-0 px-6 pb-6 bg-[#F7F6F1] border-t border-t-[#CCCCCC99]">

            </nav>
        </section>
    )
})