import React from 'react'
import { menu } from '../data'
import Link from 'next/link'

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-30 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-2/3 relative"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-8">{category.desc}</p>
            <button 
              className={` absolute bottom-4 left-4 hidden xl:block py-2 px-4 rounded-md ${category.color === "black" ? "text-white" : "text-red-500"}`}
              style={{ backgroundColor: category.color }}
          
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default MenuPage
