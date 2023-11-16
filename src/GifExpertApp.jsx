import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        /*     const cleanCategory = newCategory.toLowerCase(); */

        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                    /* return <li key={category}>{category}</li> */
                ))
            }
        </>
    )
}

export default GifExpertApp