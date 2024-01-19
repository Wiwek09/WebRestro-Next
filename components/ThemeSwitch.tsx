"use client"

import { FiSun, FiMoon } from "react-icons/fi"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import Image from "next/image"

const ThemeSwitch = () => {

    const {systemTheme,theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false)

    const currentTheme = theme === 'system' ? systemTheme : theme ;

    useEffect(()=> setMounted(true) ,[]);

    if (!mounted) return (
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          sizes="36x36"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      )

    if (currentTheme === "dark"){
        return (
         <FiSun className="cursor-pointer h-[1.2rem] w-[1.2rem] ease-in origin-top-left rotate-12  "  onClick={() => setTheme('light')} />
        )
     }

     else if(currentTheme === "light"){
        return (
         <FiMoon className=" cursor-pointer h-[1.2rem] w-[1.2rem]  ease-in origin-top-left rotate-12 " onClick={() => setTheme('dark')} />
        )
     }
  
}

export default ThemeSwitch