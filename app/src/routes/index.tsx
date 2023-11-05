import {component$} from "@builder.io/qwik";
import type {DocumentHead} from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <section class="relative w-screen h-screen flex flex-col gap-4 p-6 main-gradient-background text-black">
            <nav class="flex flex-row justify-between">
                <div class="w-[2.5rem] aspect-square bg-white rounded-full">
                    <span></span>
                </div>

                <div class="flex items-center justify-center bg-white rounded-3xl w-[4rem] py-1">
                    <span class="text-black">Skip</span>
                </div>
            </nav>

            <section class="flex flex-col gap-6 justify-center items-center py-16 text-black">
                <h1 class="text-[3.2rem] text-center font-bold leading-[3rem]">Meet The Cash Card</h1>
                <p class="text-lg font-sans px-12 text-center">The customisable, no hidden fee, instant discount debit card</p>

                <img class="w-[19rem] aspect-video mt-8" src="/img/credit-card.png" alt="Credit Card Image"/>
            </section>

            <section class="absolute left-6 right-6 bottom-16 flex">
                <button class="bg-black text-white py-2  rounded-lg font-bold text-lg flex flex-col flex-1 justify-center items-center text-center">Get Free Cash Card</button>
            </section>

            <div class="bubbles">
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
                <div class="bubble"></div>
            </div>
        </section>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
