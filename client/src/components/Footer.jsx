import React from 'react'

export default function Footer() {
  return (
    <div>
    <footer class="bg-white text-gray-600 py-4 px-3 mt-16">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <p class="text-xs  md:text-sm">Copyright 2020 &copy; All Rights Reserved</p>
        </div>
        <div class="w-full md:w-1/2 md:text-center md:mb-0 mb-8">
            <ul class="list-reset flex justify-center flex-wrap text-xs md:text-sm gap-3">
                <li><a href="#" class=" hover:text-black">Contact</a></li>
                <li class="mx-4"><a href="#" class=" hover:text-black">Privacy Policy</a></li>
                <li><a href="#" class=" hover:text-black">Terms of Use</a></li>
            </ul>
        </div>
    </div>
</footer>
    </div>
  )
}
